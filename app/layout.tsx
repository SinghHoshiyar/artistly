import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}