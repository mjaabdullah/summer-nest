import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";


export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
}


export const config = {
  matcher: ["/my-profile", "/my-profile/:path*", "/products/details/:id*"],
};
