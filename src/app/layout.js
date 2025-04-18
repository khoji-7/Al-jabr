import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] w-[100%] mx-auto">
        {children}
      </body>
    </html>
  );
}