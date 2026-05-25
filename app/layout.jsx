import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
  description: 'SmartPrintGuide is your source for printers, cartridges, toner, and printing supplies. Shop home and office printers with fast shipping and expert support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <ScrollToTop />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
