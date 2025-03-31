import {
  AccessDeniedError,
  BadRequestError,
  HttpError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "@/interfaces/http-error";

export class HttpService {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  httpGet = async <TResponse>(
    endpoint: string,
    accessToken?: string,
  ): Promise<TResponse> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
      headers: this.getHeaders(accessToken),
    });
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, endpoint);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  httpPost = async <TRequest, TResponse>(
    endpoint: string,
    body?: TRequest,
    accessToken?: string,
  ): Promise<TResponse> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: this.getHeaders(accessToken),
      body: JSON.stringify(body || {}),
    });
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, response.url);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  httpPatch = async <TRequest, TResponse>(
    endpoint: string,
    body?: TRequest,
    accessToken?: string,
  ): Promise<TResponse> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "PATCH",
      headers: this.getHeaders(accessToken),
      body: JSON.stringify(body || {}),
    });
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, response.url);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  httpDelete = async <TRequest, TResponse>(
    endpoint: string,
    body?: TRequest,
    accessToken?: string,
  ): Promise<TResponse> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: this.getHeaders(accessToken),
      body: JSON.stringify(body || {}),
    });
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, response.url);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  handleHttpError = (
    statusCode: number,
    error: string,
    endpoint: string,
  ): HttpError => {
    const status: any = {
      400: new BadRequestError(error, endpoint),
      401: new UnauthorizedError(error, endpoint),
      403: new AccessDeniedError(error, endpoint),
      404: new NotFoundError(error, endpoint),
      500: new InternalServerError(error, endpoint),
    };
    throw status[statusCode] || new Error("Failed to retrieve: " + endpoint);
  };

  getHeaders = (accessToken?: string) => {
    const headers = new Headers();
    headers.set("Content-type", "application/json");
    if (accessToken) headers.set("Authorization", accessToken);
    return headers;
  };
}
