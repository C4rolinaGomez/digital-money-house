"use client";

import apiService from "@/services/api.service";
import { routes } from "@/utils/routes";
import { validatePathname } from "@/utils/util";
import { usePathname, useRouter } from "next/navigation";
import styles from "./menu.module.css";

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (pathname: string) => {
    if (pathname == "/logout") {
      apiService.logoutInternal();
      router.push("/");
      router.refresh();
    } else {
      router.push(pathname);
    }
  };

  return (
    <ul className={styles.menu}>
      {routes.map((route) => (
        <li
          key={route.path}
          className={validatePathname(route, pathname) ? styles.active : ""}
          onClick={() => navigateTo(route.path)}
        >
          {route.name}
        </li>
      ))}
    </ul>
  );
};
