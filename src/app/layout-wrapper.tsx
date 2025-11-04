"use client";

import { usePathname } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import { RouterURLs } from "@/utils/constants";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = [RouterURLs.LOGIN].includes(pathname);

  return isAuthPage ? (
    children
  ) : (
    <MainLayout>
      <ErrorBoundary key={pathname}>{children}</ErrorBoundary>
    </MainLayout>
  );
}
