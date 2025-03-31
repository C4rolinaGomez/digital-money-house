export type PostAccountDepositsRequestType = {
  amount: number;
  dated: string;
  destination: string;
  origin: string;
};

export type PostAccountDepositsResponseType = {
  id: number;
  account_id: number;
  type: string;
  description: string;
  origin: string;
  destination: string;
  amount: number;
  dated: string;
};
