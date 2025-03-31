import { Card } from "@/components/shared/card/card";
import { Icon } from "@/components/shared/icons/icons";
import styles from "./service-payment-fail.module.css";
import { Button } from "@/components/shared/button/button";

export const ServicePaymentFail = () => {
  return (
    <>
      <Card color="background" className={styles.servicePaymentFail}>
        <Icon icon="fail" color="error" />
        <h3>Hubo un problema con tu pago</h3>
        <div>
          <p>Puede deberse a fondos insuficientes.</p>
          <p>Comunicate con la entidad emisora de la tarjeta.</p>
        </div>
      </Card>
      <Button
        type="link"
        color="primary"
        size="large"
        href={"/dashboard/services"}
      >
        Volver a pago de servicios
      </Button>
    </>
  );
};
