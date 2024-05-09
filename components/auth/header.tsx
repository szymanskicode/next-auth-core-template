import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type HeaderProps = {
  label: string;
};

export const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href="/">
        <h1 className={cn("flex justify-center items-center gap-2 text-3xl font-semibold", font.className)}>
          <Image src={`/images/lock_with_key.png`} alt={"Auth"} width="32" height="32" /> Auth
        </h1>
      </Link>
      <p className=" text-muted-foreground text-small">{label}</p>
    </div>
  );
};
