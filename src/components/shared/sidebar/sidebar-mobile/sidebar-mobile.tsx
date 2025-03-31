"use client";

import { Icon } from "@/components/shared/icons/icons";
import { Menu } from "@/components/shared/sidebar/menu/menu";
import useMediaQuery from "@/hooks/media-query";
import { useAppStore } from "@/providers/app-store-provider";
import { useEffect } from "react";
import styles from "./sidebar-mobile.module.css";

type SidebarMobileProps = {
  firstname: string;
  lastname: string;
};

export const SidebarMobile = ({ firstname, lastname }: SidebarMobileProps) => {
  const sidebarIsOpen = useAppStore((state) => state.sidebarIsOpen);
  const toggle = useAppStore((state) => state.toggle);
  const isMobile = useMediaQuery("(max-width: 834px)");

  useEffect(() => {
    if (!isMobile) {
      toggle(false);
    }
  }, [isMobile]);

  return (
    sidebarIsOpen &&
    isMobile && (
      <aside className={styles.sidebarMobile}>
        <div>
          <div className={styles.greeting}>
            Hola, <br />
            {firstname} {lastname}
          </div>
          <Icon
            icon="close"
            color="primary"
            onClick={() => toggle(!sidebarIsOpen)}
          />
        </div>
        <Menu />
      </aside>
    )
  );
};
