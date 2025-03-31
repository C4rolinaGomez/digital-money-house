"use client";

import { ActivityFilter } from "@/components/dashboard/activity/activity-filter/activity-filter";
import { Input } from "@/components/shared/input/input";
import { useActivityStore } from "@/providers/activity-store-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./activity-form.module.css";

type ActivityFormProps = {
  showFilter?: boolean;
};

export const ActivityForm = ({ showFilter }: ActivityFormProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSearchTerm = useActivityStore((state) => state.setSearchTerm);

  const schema = z.object({
    searchTerm: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const { handleSubmit, watch, setValue } = controls;

  const onSubmit = (data: FormData) => {
    const query = data.searchTerm ? `?search=${data.searchTerm}` : "";
    if (pathname === "/dashboard") {
      router.push(`/dashboard/activity${query}`);
    } else {
      setSearchTerm(data.searchTerm);
    }
  };

  useEffect(() => {
    const value = searchParams.get("search") || "";
    setValue("searchTerm", value);
    setSearchTerm(value);
  }, [searchParams]);

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      console.log(value.searchTerm);
      setSearchTerm(value.searchTerm!);
    });
    return () => unsubscribe();
  }, [watch("search")]);

  return (
    <FormProvider {...controls}>
      <form id={styles.activityForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          fieldName="searchTerm"
          type="text"
          placeholder="Buscar en tu actividad"
          width="full"
          icon="search"
          iconColor="gray"
        />
        {showFilter && <ActivityFilter />}
      </form>
    </FormProvider>
  );
};
