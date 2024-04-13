import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800']
});

export const metadata: Metadata = {
  title: "Board Game",
  description: "Interview task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#3E92CE' }} className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

