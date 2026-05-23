import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Laundry Depot — For your everyday laundry solutions",
  description: "Professional laundry services at your convenience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ backgroundColor: '#0D1B2A', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}