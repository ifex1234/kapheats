import { ReservationForm } from "@/components/booking";
import { useUser } from "@stackframe/stack";
import React from "react";

function Page() {
  const user = useUser({ or: "redirect" });
  return (
    <div>
      <div>Hi, {user.displayName}</div>;
      <ReservationForm />
    </div>
  );
}

export default Page;
