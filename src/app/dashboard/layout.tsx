import { Breadcrumb } from "@/components/dashboard/breadcrumb/breadcrumb";
import { Alert } from "@/components/shared/alert/alert";
import { Loader } from "@/components/shared/loader/loader";
import { Sidebar } from "@/components/shared/sidebar/sidebar/sidebar";
import styles from "./dashboard.module.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section id={styles.dashboard}>
        <Loader />
        <Sidebar />
        <div id={styles.content}>
          <Breadcrumb />
          {children}
        </div>
        <Alert />
      </section>
    </>
  );
}
