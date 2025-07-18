"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/components/ui/header";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  return (
    <div className="w-full flex flex-col">
    <Header />
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        
          <div className="text-center">
            <h1 className="">Welcome to Not Lmpng</h1>
          </div>
          
          <form
            className="space-y-4 w-2/3"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              formData.set("flow", flow);
              void signIn("password", formData)
                .catch((error) => {
                  setError(error.message);
                })
                .then(() => {
                  router.push("/");
                });
            }}
          >
            <div className="space-y-3">
              <input
                className="w-full bg-background text-foreground rounded-md p-2 border-2 border-slate-200 dark:border-slate-800"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full bg-background text-foreground rounded-md p-2 border-2 border-slate-200 dark:border-slate-800"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="w-full bg-foreground text-background rounded-md py-2 px-4 font-medium hover:opacity-90 transition-opacity"
                type="submit"
              >
                {flow === "signIn" ? "Sign in" : "Sign up"}
              </button>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-sm">
                {flow === "signIn" ? "Don't have an account?" : "Already have an account?"}
                {' '}
                <button
                  type="button"
                  className="text-foreground underline hover:no-underline"
                  onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
                >
                  {flow === "signIn" ? "Sign up" : "Sign in"} instead
                </button>
              </p>
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}
          </form>
        
      </div>
    </div>
    </div>
  );
}
