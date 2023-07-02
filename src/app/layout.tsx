import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ash Sandler - SWE",
  description: "Personal website for Ash Sandler, Senior Software Engineer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-1 grid-rows-[4rem_1fr_8rem] md:grid-rows-[6rem_1fr_8rem] bg-white">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
