// src/app/auth/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import AuthLayout from "./components/AuthLayout";
import LoginStep from "./components/Login";
import SignupStep from "./components/Signup";
import ForgotPasswordStep from "./components/ForgotPassword";
import OtpStep from "./components/OtpPage";
import Link from "next/link";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const step = (searchParams.get("step") ?? "login").toLowerCase();
  const email = searchParams.get("email") ?? undefined;

  switch (step) {
    case "login":
      return (
        <AuthLayout
          title="Login to your account"
          subtitle={
            <>
              Don&apos;t have an account?{" "}
              <Link href="/auth?step=signup" className="login-link">
                Create One!
              </Link>
            </>
          }
        >
          <LoginStep />
        </AuthLayout>
      );

    case "signup":
      return (
        <AuthLayout title="Create an account">
          <SignupStep />
        </AuthLayout>
      );

    case "forgot-password":
      return (
        <AuthLayout
          title="Forgot Password"
          subtitle="Enter your email to receive the OTP"
        >
          <ForgotPasswordStep />
        </AuthLayout>
      );

    case "otp":
      return (
        <AuthLayout title="Enter the OTP">
          <OtpStep email={email} />
        </AuthLayout>
      );

    default:
      return (
        <AuthLayout title="Login to your account">
          <LoginStep />
        </AuthLayout>
      );
  }
}
