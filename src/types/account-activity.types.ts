type GetAccountActivityResponseType = {
  id: number;
  account_id: number;
  type: "Deposit" | "Withdrawal";
  description: string;
  origin: string;
  destination: string;
  amount: number;
  dated: string;
};
