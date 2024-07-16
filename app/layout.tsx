import type { Metadata } from "next";
import { TtCommon } from "@/lib/fonts";
import "./globals.css";
import NavBar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer";
import BoxesSpin from "@/components/animated/spinBoxes";
import BreakManager from "@/components/wrappers/breakManager";

export const metadata: Metadata = {
  title: "Heriberto Alonso",
  description: "Portafolio de Heriberto Abraham Alonso Melendez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${TtCommon.className}`}>
        <BreakManager>
          <div className="w-full h-auto flex items-start justify-center bg-materialGray">
            <BoxesSpin />
            <div className="w-[1200px] min-h-screen relative">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </BreakManager>
      </body>
    </html>
  );
}
