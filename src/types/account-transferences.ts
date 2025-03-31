type PostAccountTransferencesRequestType = {
  amount: number;
  dated: string;
  destination: string;
  origin: string;
};

type PostAccountTransferencesResponseType = {
  id: number;
  account_id: number;
  type: string;
  description: string;
  origin: string;
  destination: string;
  amount: number;
  dated: string;
};
