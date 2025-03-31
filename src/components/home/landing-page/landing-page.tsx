import { ProductInfo } from "@/components/home/product-info/product-info";
import styles from "./landing-page.module.css";

export const LandingPage = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.banner}>
        <h1>De ahora en adelante, hacés más con tu dinero</h1>
        <hr />
        <h2>
          Tu nueva <b>billetera virtual</b>
        </h2>
      </div>
      <ProductInfo />
    </section>
  );
};
