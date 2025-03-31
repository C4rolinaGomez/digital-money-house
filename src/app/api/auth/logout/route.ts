import redisService from "@/services/common/redis.service";
import { handleHttpError } from "@/utils/http";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = cookies();
    const sessionId = cookieStore.get("SESSION_ID")?.value || "";
    await redisService.delete(sessionId);
    cookies().delete("SESSION_ID");
    cookies().delete("SESSION_USER");
    return NextResponse.json({ sessionId: sessionId });
  } catch (error: any) {
    return handleHttpError(error);
  }
}
