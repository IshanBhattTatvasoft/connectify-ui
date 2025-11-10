// app/api/auth/google/callback/route.ts
import { GoogleAuthCallback } from "@/services/auth.service";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let redirect = NextResponse.redirect(new URL("/", req.url));
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return new NextResponse("Missing code", { status: 400 });
  }

  const response = await GoogleAuthCallback(code);

  if (response.statusCode !== HttpStatusCode.Ok) {
    console.error("Backend error:", response.error);
    return new NextResponse("Authentication failed", { status: 500 });
  }

  console.log("data::: ", response.data);

  if (response.data) {
    // Create redirect response
    redirect = NextResponse.redirect(new URL("/welcome", req.url));

    // Set httpOnly, secure cookies
    redirect.cookies.set("accessToken", response.data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60, // 15 minutes
    });

    redirect.cookies.set("refreshToken", response.data.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 30 days
    });
  }

  return redirect;
}
