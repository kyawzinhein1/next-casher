"use client";

import { NextUIProvider } from "@nextui-org/react";

import { usePathname } from "next/navigation";
import AdminLayout from "./admin/page";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current route starts with /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <NextUIProvider>
      {isAdminRoute ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <div>{children}</div>
      )}
    </NextUIProvider>
  );
}
