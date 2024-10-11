import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/components/navbar";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "kapheats",
  description: "Home of great food and cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Suspense fallback={<Loading />}>
              <NavBar />
              {children}
            </Suspense>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: { backgroundColor: "purple", color: "white" },
              }}
              theme="system"
            />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
