import { PanelsTopLeft, Home, FileImage, Grid2x2, CircleUserRound } from "lucide-react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
},
{
  title: "Profile",
  url: "/profile",
  icon: CircleUserRound,
},
  {
    title: "Websites",
    url: "/websites",
    icon: PanelsTopLeft,
  },
  {
    title: "Graphics",
    url: "/graphics",
    icon: FileImage,
  },
  {
    title: "Gridgrab",
    url: "/gridgrab",
    icon: Grid2x2,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-center text-black">JUST LAUNCH IT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="inline w-8 h-8 stroke-[2.5]"/>
                      <h2 className="inline">{item.title}</h2>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}