import httpExternalService from "@/services/common/http-external.service";
import httpInternalService from "@/services/common/http-internal.service";
import {
  PostAccountDepositsRequestType,
  PostAccountDepositsResponseType,
} from "@/types/account-deposits.types";
import { GetAccountResponseType } from "@/types/account.types";
import {
  LoginInternalResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import { LogoutResponseType } from "@/types/logout.types";
import { RedisResponseType } from "@/types/redis.types";
import {
  RegisterRequestType,
  RegisterResponseType,
} from "@/types/register.types";
import {
  GetUserRequestType,
  GetUserResponseType,
  PatchUserRequestType,
  PatchUserResponseType,
} from "@/types/user.types";
import httpProxyService from "./common/http-proxy.service";

class ApiService {
  // Internal Routes

  loginInternal = async (loginRequest: LoginRequestType) =>
    httpInternalService.httpPost<LoginRequestType, LoginInternalResponseType>(
      "/auth/login",
      loginRequest
    );

  logoutInternal = async () =>
    httpInternalService.httpPost<{}, LogoutResponseType>("/auth/logout");

  registerInternal = async (registerRequest: RegisterRequestType) =>
    httpInternalService.httpPost<RegisterRequestType, RegisterResponseType>(
      "/auth/register",
      registerRequest
    );

  getRedisValue = async (key: string) =>
    httpInternalService.httpGet<RedisResponseType>(`/redis?key=${key}`);

  // Digital Money Back 1.0

  login = async (loginRequest: LoginRequestType) =>
    httpExternalService.httpPost<LoginRequestType, LoginResponseType>(
      "/api/login",
      loginRequest
    );

  register = async (registerRequest: RegisterRequestType) =>
    httpExternalService.httpPost<RegisterRequestType, RegisterResponseType>(
      "/api/users",
      registerRequest
    );

  getAccount = async () =>
    httpProxyService.httpGet<GetAccountResponseType>("/api/account");

  getUser = async ({ user_id }: GetUserRequestType) =>
    httpProxyService.httpGet<GetUserResponseType>(`/api/users/${user_id}`);

  patchUser = async (userRequest: PatchUserRequestType) =>
    httpProxyService.httpPatch<PatchUserRequestType, PatchUserResponseType>(
      `/api/users/${userRequest.id}`,
      userRequest
    );

  getAccountCards = async ({ account_id }: GetAccountCardsRequestType) =>
    httpProxyService.httpGet<GetAccountCardsResponseType[]>(
      `/api/accounts/${account_id}/cards`
    );

  postAccountCards = async (
    account_id: number,
    cardRequest: PostAccountCardsRequestType
  ) =>
    httpProxyService.httpPost<
      PostAccountCardsRequestType,
      PostAccountCardsResponseType
    >(`/api/accounts/${account_id}/cards`, cardRequest);

  deleteAccountCards = async (account_id: number, card_id: number) =>
    httpProxyService.httpDelete<{ account_id: number; card_id: number }, any>(
      `/api/accounts/${account_id}/cards/${card_id}`
    );

  postAccountDeposits = async (
    account_id: number,
    depositRequest: PostAccountDepositsRequestType
  ) =>
    httpProxyService.httpPost<
      PostAccountDepositsRequestType,
      PostAccountDepositsResponseType
    >(`/api/accounts/${account_id}/deposits`, depositRequest);

  postAccountTransferences = async (
    account_id: number,
    transferRequest: PostAccountDepositsRequestType
  ) =>
    httpProxyService.httpPost<
      PostAccountDepositsRequestType,
      PostAccountDepositsResponseType
    >(`/api/accounts/${account_id}/transferences`, transferRequest);

  getAccountActivity = async (account_id: number) =>
    httpProxyService.httpGet<GetAccountActivityResponseType[]>(
      `/api/accounts/${account_id}/activity`
    );

  getAccountTransactionById = async (account_id: number, id: number) =>
    httpProxyService.httpGet<GetAccountActivityResponseType>(
      `/api/accounts/${account_id}/transactions/${id}`
    );

  getServices = async () =>
    httpProxyService.httpGet<GetServiceResponseType[]>(`/service`);

  getServiceDetail = async (service_id: number) =>
    httpProxyService.httpGet<GetServiceDetailResponseType>(
      `/service/${service_id}`
    );
}

const apiService = new ApiService();
export default apiService;
