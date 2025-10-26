import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";


const inter = Poppins({subsets: ["latin"], weight: ["400", "600"]});

export const metadata: Metadata = {
  title: "Murillo Dias",
  description: "Murillo Dias' personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
