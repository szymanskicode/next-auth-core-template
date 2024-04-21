import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("flex justify-center items-center gap-2 text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          <Image src={`/images/lock_with_key.png`} alt={"Auth"} width="64" height="64" /> Auth
        </h1>
        <p className="text-white text-lg">Next.js authentication template</p>
        <div>
          <LoginButton mode="redirect">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
