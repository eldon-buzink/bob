import "@/styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaBar } from "@/components/cta-bar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-dvh antialiased">
        <Header />
        <main>{children}</main>
        <CtaBar />
        <Footer />
      </body>
    </html>
  );
}
