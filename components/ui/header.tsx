'use client'
import Image from "next/image";
import { SidebarInset, SidebarTrigger } from "./sidebar";
import { Authenticated, useConvexAuth, useMutation, useQuery, Unauthenticated } from "convex/react";
import Link from "next/link";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row items-center justify-between">
      <SidebarInset className="w-full flex flex-row justify-between">
          <SidebarTrigger />
          <Image src="/Logo.png" alt="Logo" width={40} height={32} />
          <Authenticated>
              <SignOutButton />
          </Authenticated>
          <Unauthenticated>
              <Button>
                <Link href="/signin">Sign in</Link>
              </Button>
          </Unauthenticated>
      </SidebarInset>
    </header>
  );
}

function SignOutButton() {
    const { isAuthenticated } = useConvexAuth();
    const { signOut } = useAuthActions();
    const router = useRouter();
    return (
      <>
        {isAuthenticated && (
          <Button variant="outline"
            onClick={() =>
              void signOut().then(() => {
                router.push("/signin");
              })
            }
          >
            Sign out
          </Button>
        )}
      </>
    );
  }
