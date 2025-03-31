import { RouteType } from "./routes";

export const getLastDigits = (cardNumber: number) => {
  return String(cardNumber).slice(-4);
};

export const maskCardNumber = (cardNumber: number) => {
  const lastFourDigits = getLastDigits(cardNumber);
  return "*".repeat(String(cardNumber).length - 4) + lastFourDigits;
};

export const validatePathname = (route: RouteType, pathname: string) =>
  route.path === pathname ||
  route.children?.some((item) => new RegExp(item.path).test(pathname));
