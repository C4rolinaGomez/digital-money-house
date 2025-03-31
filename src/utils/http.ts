import { HttpError } from "@/interfaces/http-error";
import { NextResponse } from "next/server";

export const handleHttpError = (error: any) => {
  if (error instanceof HttpError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode },
    );
  } else {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
