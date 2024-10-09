"use server";

import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export async function BookTable(prevState: any, formData: FormData) {
  const res = await fetch("https://...");
  const json = await res.json();

  if (!res.ok) {
    return {
      name: "",
      numberOfPersons: "",
      purpose: "",
      userId: "",
    };
  }
  console.log(json);

  redirect("/dashboard");
}
