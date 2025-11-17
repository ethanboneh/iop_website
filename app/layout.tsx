import type { Metadata } from "next";
import { Oswald, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: "700",
  variable: "--font-oswald",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: "700",
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Institute of Politics at Stanford | IOP",
  description: "The Institute of Politics at Stanford (IOP) is dedicated to fostering democratic engagement and political discourse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
