import { DepositsOption } from "@/components/dashboard/deposits/deposits-option/deposits-option";

export default async function Page() {
  const options = [
    {
      title: "Transferencia bancaria",
      icon: "profile",
      pathname: "/dashboard/deposits/account",
    },
    {
      title: "Seleccionar tarjeta",
      icon: "card",
      pathname: "/dashboard/deposits/cards",
    },
  ];

  return (
    <>
      {options.map((option) => (
        <DepositsOption key={option.title} {...option} />
      ))}
    </>
  );
}
