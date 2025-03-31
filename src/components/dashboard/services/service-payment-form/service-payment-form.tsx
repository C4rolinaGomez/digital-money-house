"use client";

import { Button } from "@/components/shared/button/button";
import { Card } from "@/components/shared/card/card";
import { Input } from "@/components/shared/input/input";
import { ActivityPaymentSteps } from "@/enums/enum";
import useMediaQuery from "@/hooks/media-query";
import { useServiceStore } from "@/providers/service-store-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./service-payment-form.module.css";

export const ServicePaymentForm = () => {
  const isMobile = useMediaQuery("(max-width: 834px)");
  const schema = z.object({
    accountNumber: z.string().min(1),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = controls;

  const { setAccountNumber, setStep } = useServiceStore((state) => state);

  const onSubmit = (data: FormData) => {
    setAccountNumber(data.accountNumber);
    setStep(ActivityPaymentSteps.ACTIVITY_PAYMENT_SELECT_CARD_LIST);
  };

  return (
    <FormProvider {...controls}>
      <Card color="background">
        <form id={styles.servicePaymentForm} onSubmit={handleSubmit(onSubmit)}>
          <p>Número de cuenta sin el primer 2</p>
          <div>
            <Input
              fieldName="accountNumber"
              type="number"
              placeholder=""
              width="full"
            />
          </div>
          {!isMobile && (
            <div className={styles.button}>
              <Button
                type="submit"
                color="primary"
                size="large"
                width="full"
                onSubmit={onSubmit}
                disabled={!isValid}
              >
                Continuar
              </Button>
            </div>
          )}
        </form>
      </Card>
      {isMobile && (
        <div className={styles.buttonMobile}>
          <Button
            type="submit"
            color="primary"
            size="large"
            width="full"
            onSubmit={onSubmit}
            disabled={!isValid}
          >
            Continuar
          </Button>
        </div>
      )}
    </FormProvider>
  );
};
