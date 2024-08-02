"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import DashNavBar from "@/components/dashboard/DashNavBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Exnow",
//   description: "Exnow",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
        
          {pathname.startsWith('/dashboard') ? <DashNavBar /> : <Navbar />}
          {children}
        </div>
      </body>
    </html>
  );
}
