"use client";

import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import { Input } from "@/components/shared/input/input";
import { Small } from "@/components/shared/small/small";
import { useLogin } from "@/hooks/api-query-hook";
import { NotFoundError, UnauthorizedError } from "@/interfaces/http-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./login-form.module.css";

export const LoginForm = () => {
  const { mutate, isPending } = useLogin();

  const router = useRouter();
  const [hasEmail, setHasEmail] = useState(false);
  const [error, setError] = useState("");

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = controls;

  const onSubmit = async (data: FormData) => {
    setError("");
    const { email, password } = data;
    if (!hasEmail && email !== "") {
      setHasEmail(true);
      return;
    }
    if (isValid) {
      mutate(
        { email, password },
        {
          onSuccess: () => {
            router.push("/dashboard");
          },
          onError: (e) => {
            if (e instanceof NotFoundError) {
              setError("Usuario inexistente. Vuelve a intentarlo");
            } else if (e instanceof UnauthorizedError) {
              setError("Credenciales invalidas. Vuelve a intentarlo");
            }
          },
        }
      );
    }
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.clear();
  }, []);

  return (
    <FormProvider {...controls}>
      <form id={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>¡Hola! Ingresá tu e-mail</h2>
        <Input
          fieldName="email"
          type="text"
          placeholder="Correo electronico"
          width="full"
          display={!hasEmail}
        />
        <Input
          fieldName="password"
          type="password"
          placeholder="Contraseña"
          width="full"
          display={hasEmail}
        />
        <Button
          type="submit"
          color="primary"
          size="large"
          width="full"
          onSubmit={onSubmit}
          disabled={isPending}
        >
          Continuar
          {isPending && <Icon icon="spinner" color="tertiary" />}
        </Button>
        {!hasEmail && (
          <Button
            type="link"
            color="tertiary"
            size="large"
            width="full"
            href="/register"
          >
            Crear cuenta
          </Button>
        )}
        {error && <Small text={error} invalid={true} textAlign="center" />}
      </form>
    </FormProvider>
  );
};
