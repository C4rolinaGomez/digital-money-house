import RegisterSchema from "@/schemas/register.schema";
import apiService from "@/services/api.service";
import { handleHttpError } from "@/utils/http";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const registerRequest = RegisterSchema.parse(await req.json());
    const registerResponse = await apiService.register(registerRequest);
    return NextResponse.json({ email: registerResponse.email });
  } catch (error: any) {
    return handleHttpError(error);
  }
}
