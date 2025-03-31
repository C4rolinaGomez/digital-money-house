"use client";

import { Input } from "@/components/shared/input/input";
import { useServiceStore } from "@/providers/service-store-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./service-form.module.css";

export const ServiceForm = () => {
  const schema = z.object({
    searchTerm: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const { handleSubmit, watch } = controls;

  const setSearchTerm = useServiceStore((state) => state.setSearchTerm);

  const onSubmit = (data: FormData) => {
    setSearchTerm(data.searchTerm);
  };

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      setSearchTerm(value.searchTerm!);
    });
    return () => unsubscribe();
  }, [watch("searchTerm")]);

  return (
    <FormProvider {...controls}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.search}>
          <Input
            fieldName="searchTerm"
            type="text"
            placeholder="Buscá entre más de 5000 empresas"
            width="full"
            icon="search"
            iconColor="gray"
          />
        </div>
      </form>
    </FormProvider>
  );
};
