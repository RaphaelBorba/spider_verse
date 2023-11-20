import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Spider-Verse",
  description: "Carrossel parallax do Aranhaverso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de menu"
            height={25}
            width={36}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/spider-logo.svg"
            alt="Spiderman"
            width={260}
            height={70}
          />
          <Image
            src="/icons/user.svg"
            alt="Login"
            height={25}
            width={36}
            style={{ cursor: "pointer" }}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
