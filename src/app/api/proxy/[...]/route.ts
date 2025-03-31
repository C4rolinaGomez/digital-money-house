import { UnauthorizedError } from "@/interfaces/http-error";
import httpExternalService from "@/services/common/http-external.service";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

enum RequestType {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export async function GET(req: Request) {
  const { url, accessToken } = await getHttpOptions(req, RequestType.GET);
  try {
    const response = await httpExternalService.httpGet<any>(url, accessToken!);
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.json(e, { status: 500 });
    }
  }
}

export async function POST(req: Request) {
  const { url, body, accessToken } = await getHttpOptions(
    req,
    RequestType.POST
  );
  try {
    const response = await httpExternalService.httpPost<any, any>(
      url,
      body,
      accessToken!
    );
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.json(e, { status: 500 });
    }
  }
}

export async function DELETE(req: Request) {
  const { url, body, accessToken } = await getHttpOptions(
    req,
    RequestType.DELETE
  );
  try {
    const response = await httpExternalService.httpDelete<any, any>(
      url,
      body,
      accessToken!
    );
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.json(e, { status: 500 });
    }
  }
}

export async function PATCH(req: Request) {
  const { url, body, accessToken } = await getHttpOptions(
    req,
    RequestType.PATCH
  );
  try {
    const response = await httpExternalService.httpPatch<any, any>(
      url,
      body,
      accessToken!
    );
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.json(e, { status: 500 });
    }
  }
}

const getHttpOptions = async (req: Request, type: RequestType) => {
  const url = req.url.split("/proxy")[1];
  const accessToken = headers().get("x-access-token");
  return type === RequestType.GET
    ? { url, accessToken }
    : { url, accessToken, body: await req.json() };
};
