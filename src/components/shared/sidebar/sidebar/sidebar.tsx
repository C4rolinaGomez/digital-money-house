"use client";

import { Menu } from "@/components/shared/sidebar/menu/menu";
import useMediaQuery from "@/hooks/media-query";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 834px)");
  return (
    <>
      {!isMobile && (
        <aside className={styles.sidebar}>
          <Menu />
        </aside>
      )}
    </>
  );
};
