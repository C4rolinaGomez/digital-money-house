import { Button } from "@/components/shared/button/button";
import styles from "./dashboard-options.module.css";

export const DashboardOptions = () => {
  return (
    <div className={styles.options}>
      <Button
        type="link"
        color="primary"
        size="extralarge"
        width="full"
        href={"/dashboard/deposits"}
      >
        Cargar dinero
      </Button>
      <Button
        type="link"
        color="primary"
        size="extralarge"
        width="full"
        href={"/dashboard/services"}
      >
        Pagar servicios
      </Button>
    </div>
  );
};
