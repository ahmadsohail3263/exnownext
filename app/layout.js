import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exnow",
  description: "Exnow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        {children}
        
        </div>
        </body>
    </html>
  );
}
