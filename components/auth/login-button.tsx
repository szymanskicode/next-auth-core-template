"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LOGIN_PAGE_URL } from "@/routes";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton: React.FC<LoginButtonProps> = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(LOGIN_PAGE_URL);
  };

  if (mode === "modal") {
    return <span>TODO: Login modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
