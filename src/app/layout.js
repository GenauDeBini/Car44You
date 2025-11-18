import "./globals.css";
import Navbar from "@/components/Navbar";
import SixtHeader from "@/components/SixtHeader";

export const metadata = {
  title: "Car4You Mietwagen",
  description: "Premium Autos mieten. Economy bezahlen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className="font-sans antialiased bg-black text-white overscroll-none"
        style={{ overscrollBehavior: "none" }}
      >
        <SixtHeader />
        <Navbar />
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
