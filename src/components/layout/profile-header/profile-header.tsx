"use client";

import { Icon } from "@/components/shared/icons/icons";
import { SidebarMobile } from "@/components/shared/sidebar/sidebar-mobile/sidebar-mobile";
import useMediaQuery from "@/hooks/media-query";
import { useAppStore } from "@/providers/app-store-provider";
import styles from "./profile-header.module.css";
import { useGetAccount, useGetAccountUser } from "@/hooks/api-query-hook";

export const ProfileHeader = () => {
  const { data: accountData } = useGetAccount();
  const { data: userData } = useGetAccountUser(accountData?.user_id!);
  const { firstname, lastname } = userData || {};

  const isMobile = useMediaQuery("(max-width: 834px)");
  const sidebarIsOpen = useAppStore((state) => state.sidebarIsOpen);

  const toggle = useAppStore((state) => state.toggle);

  return (
    <div id={styles.profileHeader}>
      <div className={styles.name}>
        {firstname ? firstname[0] : "X"}
        {lastname ? lastname[0] : "X"}
      </div>
      <div className={styles.greeting}>
        Hola, {firstname} {lastname}
      </div>
      {isMobile && (
        <>
          <div className={styles.menu}>
            <Icon
              icon="menu"
              color="primary"
              onClick={() => toggle(!sidebarIsOpen)}
            />
          </div>
          <SidebarMobile firstname={firstname!} lastname={lastname!} />
        </>
      )}
    </div>
  );
};
