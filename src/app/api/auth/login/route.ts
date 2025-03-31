import LoginSchema from "@/schemas/login.schema";
import authService from "@/services/auth.service";
import { handleHttpError } from "@/utils/http";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const loginRequest = LoginSchema.parse(await req.json());
    const authResponse = await authService.authenticate(loginRequest);
    cookies().set("SESSION_ID", authResponse.sessionId, {
      expires: authResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });
    cookies().set("SESSION_USER", authResponse.email, {
      expires: authResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });
    return NextResponse.json({ email: authResponse.email });
  } catch (error: any) {
    return handleHttpError(error);
  }
}
