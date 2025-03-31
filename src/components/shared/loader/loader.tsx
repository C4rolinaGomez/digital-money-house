"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import styles from "./loader.module.css";

export const Loader = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;
  return isLoading && <div className={styles.loader}></div>;
};
