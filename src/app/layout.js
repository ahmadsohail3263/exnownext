"use client";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import DashNavBar from "@/src/components/dashboard/DashNavBar";
import { UserProvider } from "../context/providers/userProvider";


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
          <UserProvider>
            {pathname.startsWith("/dashboard") ? <DashNavBar /> : <Navbar />}
            {children}
            </UserProvider>
        </div>
      </body>
    </html>
  );
}
