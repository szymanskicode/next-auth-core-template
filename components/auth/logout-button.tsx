"use client";

import React from "react";

import { logout } from "@/actions/logout";

type LogoutButtonProps = {
  children: React.ReactNode;
  asChild?: boolean;
};

export const LogoutButton: React.FC<LogoutButtonProps> = ({ children, asChild }) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
