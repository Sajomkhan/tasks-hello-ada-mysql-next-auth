import type { Metadata } from "next";
import { getSession } from "@/lib/action";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Task Hello Ada",
  description: "A simple web application for managing tasks.",
};

export default async function AuthenticateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  // CHECK FOR AUTHINTICATION
  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
