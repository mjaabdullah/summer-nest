"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import OrDivider from "../register/OrDivider";

const GoogleSingIn = ({ callbackUrl }) => {
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };
  return (
    <>
      <OrDivider />
      <div>
        <Button
          onClick={handleGoogleSignIn}
          className="w-full"
          variant="tertiary"
        >
          <FcGoogle />
          Sign in with Google
        </Button>
      </div>
    </>
  );
};

export default GoogleSingIn;
