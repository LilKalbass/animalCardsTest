import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Breed Explorer",
  description: "done by t.me/adimoglov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <link rel="icon" href="favicon.ico" sizes="any"/>
    </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
