import styles from "./product-info-item.module.css";

type ProductInfoItemProps = {
  title: string;
  description: string;
};

export const ProductInfoItem = ({
  title,
  description,
}: ProductInfoItemProps) => {
  return (
    <div className={styles.productInfoItem}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
