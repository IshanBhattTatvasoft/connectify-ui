"use client";

import { useEffect } from "react";
import LoginPage from "./login/page";
import { redirect } from "next/navigation";
import { RouterURLs } from "@/utils/constants";

export default function Home() {
  useEffect(() => {
    redirect(RouterURLs.LOGIN);
  }, []);
  return (
    <div>
      <LoginPage />
    </div>
  );
}
