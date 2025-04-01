// src/app/layout.tsx
import "./globals.css";
import Layout from "./components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TB Weld & Repair",
  description: "Mobile welding and equipment repair in Central Vermont",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

