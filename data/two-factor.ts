import { db } from "@/lib/db";

export const getTwofactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
