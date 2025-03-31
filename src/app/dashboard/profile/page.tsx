import { AccountInfo } from "@/components/dashboard/profile/account-info/account-info";
import { PaymentMethods } from "@/components/dashboard/profile/payment-methods/payment-methods";
import { ProfileEditorForm } from "@/components/dashboard/profile/profile-editor-form/profile-editor-form";

export default async function Page() {
  return (
    <>
      <ProfileEditorForm />
      <PaymentMethods />
      <AccountInfo />
    </>
  );
}
