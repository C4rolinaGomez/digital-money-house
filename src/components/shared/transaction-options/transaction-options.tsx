import { Button } from "@/components/shared/button/button";
import { toast } from "sonner";
import styles from "./transaction-options.module.css";

const onDownload = () => {
  toast.message("Descargando comprobante ...", {
    description: "Esta funcionalidad no se encuentra disponible temporalmente",
  });
};

export const TransactionOptions = () => {
  return (
    <div className={styles.transactionOptions}>
      <div>
        <Button
          type="link"
          color="gray"
          size="large"
          width="full"
          href={"/dashboard"}
        >
          Ir al inicio
        </Button>
        <Button
          type="button"
          color="primary"
          size="large"
          width="full"
          onClick={onDownload}
        >
          Descargar comprobante
        </Button>
      </div>
    </div>
  );
};
