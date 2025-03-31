import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { AppStoreProvider } from "@/providers/app-store-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Tu nueva billetera digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialised`}>
        <ReactQueryProvider>
          <AppStoreProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AppStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
