"use client";

import { ServicePaymentFail } from "@/components/dashboard/services/service-payment-fail/service-payment-fail";
import { ServicePaymentForm } from "@/components/dashboard/services/service-payment-form/service-payment-form";
import { ServicePaymentSelectCardList } from "@/components/dashboard/services/service-payment-select-card-list/service-payment-select-card-list";
import { ServicePaymentVoucher } from "@/components/dashboard/services/service-payment-voucher/service-payment-voucher";
import { ActivityPaymentSteps } from "@/enums/enum";
import { useServiceStore } from "@/providers/service-store-provider";

export const ServicePaymentWizard = () => {
  const step = useServiceStore((state) => state.step);
  return (
    <>
      {(step === ActivityPaymentSteps.DEFAULT ||
        step === ActivityPaymentSteps.ACTIVITY_PAYMENT_FORM) && (
        <ServicePaymentForm />
      )}
      {step === ActivityPaymentSteps.ACTIVITY_PAYMENT_SELECT_CARD_LIST && (
        <ServicePaymentSelectCardList />
      )}
      {step === ActivityPaymentSteps.ACTIVITY_PAYMENT_VOUCHER && (
        <ServicePaymentVoucher />
      )}
      {step === ActivityPaymentSteps.ACTIVITY_PAYMENT_FAIL && (
        <ServicePaymentFail />
      )}
    </>
  );
};
