"use client";

import { Button } from "@/components/shared/button/button";
import { Input } from "@/components/shared/input/input";
import { Small } from "@/components/shared/small/small";
import { useRegister } from "@/hooks/api-query-hook";
import apiService from "@/services/api.service";
import { hasPasswordConstraint } from "@/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./register-form.module.css";

export const RegisterForm = () => {
  const { mutate } = useRegister();
  const router = useRouter();
  const [error, setError] = useState("");
  const schema = z.object({
    email: z.string().email({ message: "Correo electrónico*" }),
    firstname: z.string().min(1, { message: "Nombre*" }),
    lastname: z.string().min(1, { message: "Apellido*" }),
    dni: z
      .string()
      .min(8)
      .max(12, {
        message: "DNI: debe ser un digito entre 8-12 digitos",
      })
      .pipe(z.coerce.number()),
    password: z.string().min(6).max(20).refine(hasPasswordConstraint),
    password2: z.string().min(6).max(20).refine(hasPasswordConstraint),
    phone: z.string().min(1, { message: "Teléfono: no válido" }),
  });
  schema.refine((data) => data.password === data.password2, {
    params: ["password", "password2"],
    message: "Las contraseñas no coinciden",
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid, errors, isDirty, isSubmitted },
  } = controls;

  const onSubmit = async (data: FormData) => {
    setError("");
    const { dni, email, firstname, lastname, password, phone } = data;
    mutate(
      {
        dni,
        email,
        firstname,
        lastname,
        password,
        phone,
      },
      {
        onSuccess: () => router.push("/register/success"),
        onError: () =>
          setError("Error al enviar el formulario. Vuelve a intentarlo"),
      }
    );
  };

  return (
    <FormProvider {...controls}>
      <form id={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>Crear cuenta</h2>
        <div>
          <Input
            fieldName="firstname"
            type="text"
            placeholder="Nombre*"
            width="full"
          />
          <Input
            fieldName="lastname"
            type="text"
            placeholder="Apellido*"
            width="full"
          />
          <Input fieldName="dni" type="text" placeholder="DNI*" width="full" />
          <Input
            fieldName="email"
            type="email"
            placeholder="Correo electrónico*"
            width="full"
          />
        </div>
        <Small
          text="Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
          carácter especial, una mayúscula y un número)"
          textAlign="center"
        />
        <div>
          <Input
            fieldName="password"
            type="password"
            placeholder="Contraseña*"
            width="full"
          />
          <Input
            fieldName="password2"
            type="password"
            placeholder="Guardar contraseña*"
            width="full"
          />
          <Input
            fieldName="phone"
            type="text"
            placeholder="Teléfono*"
            width="full"
          />
          <Button
            type="submit"
            color="primary"
            size="large"
            width="full"
            onSubmit={onSubmit}
          >
            Crear cuenta
          </Button>
          <div></div>
          <div className={styles.message}>
            {error && <Small text={error} invalid={true} textAlign="center" />}
            {errors && !isValid && isDirty && isSubmitted && (
              <Small
                text="Completa los campos requeridos"
                invalid={true}
                textAlign="center"
              />
            )}
            {errors.password?.type === "custom" ||
              (errors.password2?.type === "custom" && (
                <Small
                  text="Las contraseñas no coinciden"
                  invalid={true}
                  textAlign="center"
                />
              ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
