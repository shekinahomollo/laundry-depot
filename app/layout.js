import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Laudry Depot",
  description: "Professional laundry services at your convenience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}