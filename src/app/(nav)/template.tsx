import React, { ReactNode } from "react";

function Template({ children }: { children: ReactNode }) {
  return <div className=" animate-slide">{children}</div>;
}

export default Template;
