import "./globals.css";
import { Inter } from "next/font/google";
import { metadata } from './metadata';
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
} 