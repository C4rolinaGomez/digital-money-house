export class HttpError extends Error {
  statusCode: number;
  endpoint: string;
  constructor(statusCode: number, message: string, endpoint: string) {
    super(message);
    this.statusCode = statusCode;
    this.endpoint = endpoint;
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string, endpoint: string) {
    super(400, message, endpoint);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string, endpoint: string) {
    super(401, message, endpoint);
  }
}

export class AccessDeniedError extends HttpError {
  constructor(message: string, endpoint: string) {
    super(403, message, endpoint);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string, endpoint: string) {
    super(404, message, endpoint);
  }
}

export class InternalServerError extends HttpError {
  constructor(message: string, endpoint: string) {
    super(500, message, endpoint);
  }
}
