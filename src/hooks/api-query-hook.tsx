import apiService from "@/services/api.service";
import { PostAccountDepositsRequestType } from "@/types/account-deposits.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLogin = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (variables: { email: string; password: string }) => {
      await apiService.loginInternal({
        email: variables.email,
        password: variables.password,
      });
    },
  });
  return { mutate, isPending };
};

export const useRegister = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (variables: {
      dni: number;
      email: string;
      firstname: string;
      lastname: string;
      password: string;
      phone: string;
    }) => {
      await apiService.registerInternal({
        dni: variables.dni,
        email: variables.email,
        firstname: variables.firstname,
        lastname: variables.lastname,
        password: variables.password,
        phone: variables.phone,
      });
    },
  });
  return { mutate, isPending };
};

export const useGetAccount = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["account"],
    queryFn: async () => apiService.getAccount(),
  });
  return { data, isLoading };
};

export const useGetAccountUser = (user_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => apiService.getUser({ user_id }),
    enabled: !!user_id,
  });
  return { data, isLoading };
};

export const useGetAccountCards = (account_id: number) => {
  const { data, isLoading } = useQuery<GetAccountCardsResponseType[]>({
    queryKey: ["cards"],
    queryFn: async () => apiService.getAccountCards({ account_id }),
    enabled: !!account_id,
  });
  return { data, isLoading };
};

export const useUpdateAccountUser = (user_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (variables: { key: string; value: any }) => {
      if (variables.key === "fullname") {
        const fullname = variables.value.split(" ");
        return await apiService.patchUser({
          id: user_id,
          firstname: fullname[0],
          lastname: fullname.slice(1).join(" "),
        });
      } else {
        return await apiService.patchUser({
          id: user_id,
          [variables.key]: variables.value,
        });
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
  });
};

export const useCreateAccountCards = (
  account_id: number,
  cardRequest: PostAccountCardsRequestType
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      return await apiService.postAccountCards(account_id, cardRequest);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["cards"],
        (cards: GetAccountCardsResponseType[]) => [...cards, data]
      );
      toast.message("Tarjeta registrada");
    },
    onError: (e) => {
      toast.message("Ocurrio un problema al registrar la tarjeta");
    },
  });
};

export const useDeleteAccountCards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (variables: { account_id: number; card_id: number }) => {
      return await apiService.deleteAccountCards(
        variables.account_id,
        variables.card_id
      );
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["cards"],
        (cards: GetAccountCardsResponseType[]) => {
          const filter = cards.filter((card) => card.id !== variables.card_id);
          const size = filter.length;
          if (size === 0) toast.message("No tienes tarjetas asociadas");
          return filter;
        }
      );
    },
  });
};

export const useCreateAccountDeposits = () => {
  return useMutation({
    mutationFn: async (variables: {
      account_id: number;
      depositRequest: PostAccountDepositsRequestType;
    }) => {
      return await apiService.postAccountDeposits(
        variables.account_id,
        variables.depositRequest
      );
    },
    onSuccess: () => {
      toast.message("Depósito registrado");
    },
    onError: (e) => {
      toast.message("Ocurrio un problema al registrar el depósito");
    },
  });
};

export const useCreateAccountTransferences = () => {
  return useMutation({
    mutationFn: async (variables: {
      account_id: number;
      transferRequest: PostAccountTransferencesRequestType;
    }) => {
      return await apiService.postAccountTransferences(
        variables.account_id,
        variables.transferRequest
      );
    },
    onSuccess: () => {
      toast.message("Transferencia registrada");
    },
    onError: (e) => {
      toast.message("Ocurrio un problema al registrar la transferencia");
    },
  });
};

export const useGetAccountActivity = (account_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["activity"],
    queryFn: async () => apiService.getAccountActivity(account_id),
    enabled: !!account_id,
  });
  return { data, isLoading };
};

export const useGetAccountActivityById = (account_id: number, id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["activity-detail"],
    queryFn: async () => apiService.getAccountTransactionById(account_id, id),
    enabled: !!account_id && !!id,
  });
  return { data, isLoading };
};

export const useGetServices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["payment-services"],
    queryFn: async () => apiService.getServices(),
  });
  return { data, isLoading };
};

export const useGetServiceDetail = (service_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["service-detail"],
    queryFn: async () => apiService.getServiceDetail(service_id),
    enabled: !!service_id,
  });
  return { data, isLoading };
};
