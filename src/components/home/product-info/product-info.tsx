import { ProductInfoItem } from "@/components/home/product-info-item/product-info-item";
import styles from "./product-info.module.css";

export const ProductInfo = () => {
  const productData: { title: string; description: string }[] = [
    {
      title: "Transferí dinero ",
      description:
        "Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual",
    },
    {
      title: "Pago de servicios",
      description:
        "Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel",
    },
  ];

  return (
    <div className={styles.productInfo}>
      <div className={styles.items}>
        {productData.map((item) => (
          <ProductInfoItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className={styles.ribbon}></div>
    </div>
  );
};
