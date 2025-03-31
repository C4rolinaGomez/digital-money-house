import { Icon, SvgIcon } from "@/components/shared/icons/icons";
import Link from "next/link";
import styles from "./deposits-option.module.css";

type DepositsOptionProps = {
  title: string;
  icon: string;
  pathname: string;
};

export const DepositsOption = ({
  title,
  icon,
  pathname,
}: DepositsOptionProps) => {
  return (
    <Link href={pathname} className={styles.depositOption}>
      <Icon icon={icon as SvgIcon} color="primary" />
      <div>{title}</div>
      <Icon icon="arrow-right" color="primary" />
    </Link>
  );
};
