import { toast } from "react-toastify";

// ✅ Google signup
export const handleGoogleSignup = async () => {
  if (!(window as any).google) {
    toast.error("Google SDK not loaded yet");
    return;
  }

  const client = (window as any).google.accounts.oauth2.initCodeClient({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    scope: "openid email profile",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:3000/api/auth/google/callback",
  });

  client.requestCode();
};

export const formatTimeMinAndSec = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
};

export const maskEmail = (email: string) => {
    const [localPart, domain] = email.split('@');
    const visiblePart = localPart.slice(0, 2);
    return `${visiblePart}${'*'.repeat(
        Math.max(localPart.length - 2, 0)
    )}@${domain}`;
};