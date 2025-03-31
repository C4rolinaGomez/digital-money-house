export type GetUserRequestType = {
  user_id: number;
};

export type GetUserResponseType = {
  id: number;
  firstname: string;
  lastname: string;
  dni: number;
  email: string;
  phone: string;
};

export type PatchUserRequestType = {
  id?: number;
  firstname?: string;
  lastname?: string;
  dni?: number;
  email?: string;
  phone?: string;
  password?: string;
};

export type PatchUserResponseType = {
  firstname: string;
  lastname: string;
  dni: number;
  email: string;
  phone: string;
};
