"use client";

import { ProfileHeader } from "@/components/layout/profile-header/profile-header";
import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import Link from "next/link";
import styles from "./navbar.module.css";

type NavbarProps = {
  color: "primary" | "background";
  pathname: string;
};

export const Navbar = ({ color = "primary", pathname }: NavbarProps) => {
  const cssColor = {
    primary: styles.bgPrimary,
    background: styles.bgBackground,
  };

  return (
    <nav id={styles.nav} className={cssColor[color]}>
      <Link href={"/"}>
        <Icon
          icon="logo"
          color={color === "primary" ? "background" : "primary"}
        />
      </Link>
      <div>
        {pathname === "/" && (
          <>
            <Button type="link" color="background" href={"/login"}>
              Ingresar
            </Button>
            <Button type="link" color="primary" href={"/register"}>
              Crear cuenta
            </Button>
          </>
        )}
        {pathname === "/register" && (
          <Button type="link" color="secondary" href={"/login"}>
            Iniciar sesión
          </Button>
        )}
        {pathname.includes("/dashboard") && <ProfileHeader />}
      </div>
    </nav>
  );
};
