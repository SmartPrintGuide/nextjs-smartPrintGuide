"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function AppShell({ children }) {
  const pathname = usePathname() || '';
  const isAdminRoute = pathname.startsWith('/admin');
  const isPrinterSetupRoute = pathname.startsWith('/printer-setup-and-troubleshooting');
  const showMainShell = !isAdminRoute && !isPrinterSetupRoute;

  return (
    <>
      {showMainShell && <Header />}
      {showMainShell && <ScrollToTop />}
      <main className="flex-grow">{children}</main>
      {showMainShell && <Footer />}
    </>
  );
}
