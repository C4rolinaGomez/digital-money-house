export type LoginRequestType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
};

export type LoginInternalResponseType = {
  token: string;
  email: string;
};

export type AuthResponseType = {
  sessionId: string;
  email: string;
  expireAt: number;
};
