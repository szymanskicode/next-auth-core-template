"use server";

import { signOut } from "@/auth";
import { LOGIN_PAGE_URL } from "@/routes";

export const logout = async () => {
  await signOut({ redirectTo: LOGIN_PAGE_URL });
};
