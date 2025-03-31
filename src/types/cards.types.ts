type GetAccountCardsResponseType = {
  id: number;
  account_id: number;
  number_id: number;
  first_last_name: string;
  cod: number;
  expiration_date: string;
};

type GetAccountCardsRequestType = {
  account_id: number;
};

type PostAccountCardsRequestType = {
  cod: number;
  expiration_date: string;
  first_last_name: string;
  number_id: number;
};

type PostAccountCardsResponseType = {
  id: number;
  account_id: number;
  number_id: number;
  first_last_name: string;
  cod: number;
  expiration_date: string;
};
