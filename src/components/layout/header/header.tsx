"use client";

import { Navbar } from "@/components/layout/navbar/navbar";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const navStyle = () => {
    if (pathname === "/login") return "primary";
    if (pathname === "/register") return "primary";
    return "background";
  };

  return (
    <header>
      <Navbar color={navStyle()} pathname={pathname} />
    </header>
  );
};
