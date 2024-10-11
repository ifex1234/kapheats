"use server";
import { stackServerApp } from "@/stack";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export async function BookTable(prevState: any, formData: FormData) {
  // Run inside `async` function

  redirect("/dashboard");
}

export async function Submit() {
  const user1 = await stackServerApp.getUser();
  const user = await prisma.reservation.create({
    data: {
      name: "Alice",
      numberOfPersons: "2",
      purpose: "",
      userId: String(user1?.id),
      meal: "Afang",
    },
  });
  return user;
}
