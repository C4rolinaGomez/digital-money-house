import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import apiService from "./services/api.service";

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/api/proxy/:path*"],
};

export async function middleware(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const sessionId = cookieStore.get("SESSION_ID")?.value;
    if (!sessionId)
      return NextResponse.redirect(new URL("/login", request.url));
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken)
      return NextResponse.redirect(new URL("/login", request.url));
    return setAuthHeaders(request, accessToken);
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await apiService.getRedisValue(sessionId))?.value;
};

const setAuthHeaders = (request: NextRequest, accessToken: string) => {
  const headers = new Headers(request.headers);
  headers.set("x-access-token", accessToken);
  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
};
