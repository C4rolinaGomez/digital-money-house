import styles from "./list.module.css";

type ListProps = {
  title?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
};

export const List = ({ title, children, isLoading, isEmpty }: ListProps) => {
  return (
    <div className={styles.list}>
      {title && <h4>{title}</h4>}
      {isLoading && <div className={styles.default}>Cargando...</div>}
      {!isLoading && isEmpty && (
        <div className={styles.default}>No se encontraron resultados</div>
      )}
      {children}
    </div>
  );
};
