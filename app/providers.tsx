"use client";

import { NextUIProvider } from "@nextui-org/react";

import { usePathname } from "next/navigation";
import AdminLayout from "./admin/page";
import CasherLayout from "./casher/page";
import LoginPage from "./ui/components/login";
import RegisterPage from "./register/page";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");
  const isCasherRoute = pathname.startsWith("/casher");
  const isRegister = pathname.startsWith("/register");

  return (
    <NextUIProvider>
      {isAdminRoute && <AdminLayout>{children}</AdminLayout>}
      {isCasherRoute && <CasherLayout>{children}</CasherLayout>}
      {isRegister && <RegisterPage />}
      {!isAdminRoute && !isCasherRoute && !isRegister && <LoginPage />}
    </NextUIProvider>
  );
}
