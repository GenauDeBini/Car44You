// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Sixt Mietwagen",
  description: "Premium Autos mieten. Economy bezahlen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
