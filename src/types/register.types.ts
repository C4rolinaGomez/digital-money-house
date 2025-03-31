export type RegisterRequestType = {
  dni: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
};

export type RegisterResponseType = {
  account_id: number;
  email: string;
  user_id: number;
};
