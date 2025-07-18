"use client";

import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Link from "next/link";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, PersonStanding, Computer, Hotel, Book, Stethoscope } from "lucide-react";
import { items } from "@/components/data/items";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      
      <main className="w-full p-8 flex flex-col gap-8">
        <Image src="/4devices.png" alt="Logo" width={1000} height={1000} className="w-full items-center justify-center"/>
        <h1 className="text-center">
          Just Launch It
        </h1>


        <p className="text-center">Empowering your business or side hustle with the latest technology</p>

        <div>
          <h1>About Not Lmpng Creative</h1>
          <p>About NOT LMPNG CREATIVE

At NOT LMPNG CREATIVE, we believe that every brand has a unique story waiting to be told. Founded on the principles of creativity, precision, and strategic insight, we've established ourselves as leaders in the realm of brand identity design.

Over the past 5 years, our team of visionary designers and strategic thinkers have collaborated with diverse successful businesses, from ambitious startups to established corporations, sculpting their narratives and crafting visual identities that resonate, inspire, and endure.

Our ethos is simple: A brand isn't just a logo or a tagline; it's an experience, an emotion, a promise delivered. We delve deep, understanding our client's ethos, aspirations, and target audience, ensuring that every design not only looks stunning but also embodies the company's essence and vision.

Collaboration is at our core. We work hand-in-hand with our clients, embracing their vision as our own, and offering insights and expertise to create a cohesive and compelling brand identity. Our track record of success isn't just measured by our design accolades but by the lasting impact our work has on our clients' success.

Join us on a journey of discovery, innovation, and unparalleled creativity. Let NOT LMPNG CREATIVE transform your brand's potential into a dynamic visual legacy.</p>
        </div>

        <div className="w-full flex flex-col items-center">
          <h1 className="text-center">Industries</h1>
        {items.map((item) => (
          <Card key={item.title} className="md:w-2/3 w-full mx-auto m-2 md:m-4">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row items-center gap-2">
                <item.icon />
                {item.title}
              </div>
              </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardAction>{item.action}</CardAction>
          </CardHeader>
          <CardContent>
            <p>{item.content}</p>
            {item.features && (
              <div className="mt-4 space-y-2">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            {item.stats && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-sm font-medium">{value}</p>
                    <p className="text-xs text-muted-foreground">{key}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <p>{item.footer}</p> 
          </CardFooter>
        </Card>
        ))}
        </div>

      </main>
    </div>
  );
}



