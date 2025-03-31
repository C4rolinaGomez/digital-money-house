import redisService from "@/services/common/redis.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") || "";
  const value = await redisService.get(key);
  return NextResponse.json({ key: key, value: value });
}
