"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

// Removed: Header, Footer, ScrollToTop are already rendered by layout.jsx
import UnderConstruction from '../components/common/UnderConstruction';

const HomeMain = dynamic(() => import('../components/home/HomeMain'), { ssr: false });
const AllInOne = dynamic(() => import('../components/productsCategories/all_InOne/AllInOne'), { ssr: false });
const HomePrinterSection = dynamic(() => import('../components/productsCategories/HomePrinterSection'), { ssr: false });
const OfficePrinterSection = dynamic(() => import('../components/productsCategories/OfficePrinterSection'), { ssr: false });
const LargeFormat = dynamic(() => import('../components/productsCategories/largeFormat/LargeFormat'), { ssr: false });
const InkjetPrinters = dynamic(() => import('../components/productsCategories/inkjetPrinters/InkjetPrinters'), { ssr: false });
const LaserPrinters = dynamic(() => import('../components/productsCategories/laserPrinters/LaserPrinters'), { ssr: false });
const LedPrinters = dynamic(() => import('../components/productsCategories/ledPrinters/LedPrinters'), { ssr: false });
const InkToner = dynamic(() => import('../components/productsCategories/inkToner/InkToner'), { ssr: false });
const CustomerMain = dynamic(() => import('../components/customerService/CustomerMain'), { ssr: false });
const Cart = dynamic(() => import('../components/Cart'), { ssr: false });
const Checkout = dynamic(() => import('../components/Checkout'), { ssr: false });
const OrderDetails = dynamic(() => import('../components/order/OrderDetails'), { ssr: false });
const ProfilePage = dynamic(() => import('../components/profile/ProfilePage'), { ssr: false });
const OrderHistory = dynamic(() => import('../components/profile/OrderHistory'), { ssr: false });
const BlogsMain = dynamic(() => import('../components/blogs/BlogsMain'), { ssr: false });
const ChoosingPrinterGuide = dynamic(() => import('../components/blogs/posts/ChoosingPrinterGuide'), { ssr: false });
const PrinterMaintenanceGuide = dynamic(() => import('../components/blogs/posts/PrinterMaintenanceGuide'), { ssr: false });
const SavePrintingCostsGuide = dynamic(() => import('../components/blogs/posts/SavePrintingCostsGuide'), { ssr: false });
const PrintingMistakesGuide = dynamic(() => import('../components/blogs/posts/PrintingMistakesGuide'), { ssr: false });
const SmallBusinessPrintingGuide = dynamic(() => import('../components/blogs/posts/SmallBusinessPrintingGuide'), { ssr: false });
const FAQMain = dynamic(() => import('../components/faq/FAQMain'), { ssr: false });
const ProductDetails = dynamic(() => import('../components/productsCategories/ProductDetails'), { ssr: false });
const Search = dynamic(() => import('../components/Search'), { ssr: false });
const AdminLogin = dynamic(() => import('../components/admin/Auth/AdminLogin'), { ssr: false });
const AdminDashboard = dynamic(() => import('../components/admin/Pages/AdminDashboard'), { ssr: false });
const AdminLayout = dynamic(() => import('../components/admin/Layout/AdminLayout'), { ssr: false });

// Policy and Info Pages
const AboutMain = dynamic(() => import('../components/about/AboutMain'), { ssr: false });
const PrivacyPolicy = dynamic(() => import('../components/privacyPolicy/PrivacyPolicy'), { ssr: false });
const TermsAndConditions = dynamic(() => import('../components/TermsAndConditions'), { ssr: false });
const RefundReturnPolicy = dynamic(() => import('../components/privacyPolicy/RefundReturnPolicy'), { ssr: false });
const ReturnExchangePolicy = dynamic(() => import('../components/privacyPolicy/ReturnExchangePolicy'), { ssr: false });
const ShippingPolicy = dynamic(() => import('../components/privacyPolicy/ShippingPolicy'), { ssr: false });
const CookiePolicy = dynamic(() => import('../components/privacyPolicy/CookiePolicy'), { ssr: false });
const AccessibilityStatement = dynamic(() => import('../components/privacyPolicy/AccessibilityStatement'), { ssr: false });
const Disclaimer = dynamic(() => import('../components/privacyPolicy/Disclaimer'), { ssr: false });
const ConsumerRights = dynamic(() => import('../components/privacyPolicy/ConsumerRights'), { ssr: false });
const DoNotSellOrShare = dynamic(() => import('../components/privacyPolicy/DoNotSellOrShare'), { ssr: false });
const TrackOrder = dynamic(() => import('../components/order/TrackOrder'), { ssr: false });
const ReturnsAndExchanges = dynamic(() => import('../components/order/ReturnsAndExchanges'), { ssr: false });
const PrinterBuyingGuide = dynamic(() => import('../components/guides/PrinterBuyingGuide'), { ssr: false });
const GuidesResources = dynamic(() => import('../components/guides/GuidesResources'), { ssr: false });

export default function ClientRouter() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const router = useRouter();

  // Simple pattern matching for dynamic routes
  if (pathname === '/') return renderWithShell(<HomeMain />);
  if (pathname === '/product-category/all-in-one-printers') return renderWithShell(<AllInOne />);
  if (pathname === '/home-printer') return renderWithShell(<HomePrinterSection />);
  if (pathname === '/office-printer') return renderWithShell(<OfficePrinterSection />);
  if (pathname === '/product-category/large-format-printers') return renderWithShell(<LargeFormat />);
  if (pathname === '/product-category/inkjet-printers') return renderWithShell(<InkjetPrinters />);
  if (pathname === '/product-category/laser-printers') return renderWithShell(<LaserPrinters />);
  if (pathname === '/product-category/led-printers') return renderWithShell(<LedPrinters />);
  if (pathname === '/product-category/ink-toner') return renderWithShell(<InkToner />);
  if (pathname === '/customer-service') return renderWithShell(<CustomerMain />);
  if (pathname === '/cart') return renderWithShell(<Cart />);
  if (pathname === '/checkout') return renderWithShell(<Checkout />);
  if (pathname.startsWith('/order/')) {
    const id = pathname.split('/')[2];
    return renderWithShell(<OrderDetails id={id} />);
  }
  if (pathname === '/profile') return renderWithShell(<ProfilePage />);
  if (pathname === '/profile/order-history' || pathname === '/order-history') return renderWithShell(<OrderHistory />);

  if (pathname === '/blogs') return renderWithShell(<BlogsMain />);
  
  if (pathname.startsWith('/blogs/')) {
    const slug = pathname.split('/')[2];
    const blogMap = {
      'choosing-right-printer-home-office': <ChoosingPrinterGuide />,
      'printer-maintenance-guide': <PrinterMaintenanceGuide />,
      'save-printing-costs-guide': <SavePrintingCostsGuide />,
      'top-7-printing-mistakes': <PrintingMistakesGuide />,
      'small-business-printing-essential-tools': <SmallBusinessPrintingGuide />,
    };
    if (blogMap[slug]) return renderWithShell(blogMap[slug]);
    return renderWithShell(<UnderConstruction />);
  }
  
  if (pathname === '/faq') return renderWithShell(<FAQMain />);

  if (pathname.startsWith('/product/')) {
    const slug = pathname.split('/')[2];
    return renderWithShell(<ProductDetails productSlug={slug} />);
  }

  if (pathname === '/search') {
    const query = searchParams?.get('query') || '';
    return renderWithShell(<Search initialQuery={query} />);
  }

  // Admin routes (simple handling)
  if (pathname === '/admin/login') return <AdminLogin />;
  if (pathname === '/admin' || pathname === '/admin/dashboard') return <AdminLayout><AdminDashboard /></AdminLayout>;

  // Static pages mapped to actual components
  const staticMap = {
    '/about': AboutMain,
    '/privacy-policy': PrivacyPolicy,
    '/terms-and-conditions': TermsAndConditions,
    '/refund-return-policy': RefundReturnPolicy,
    '/return-exchange-policy': ReturnExchangePolicy,
    '/shipping-policy': ShippingPolicy,
    '/cookie-policy': CookiePolicy,
    '/accessibility-statement': AccessibilityStatement,
    '/disclaimer': Disclaimer,
    '/consumer-rights': ConsumerRights,
    '/do-not-sell-or-share-my-personal-information': DoNotSellOrShare,
    '/track-order': TrackOrder,
    '/returns-exchanges': ReturnsAndExchanges,
    '/help-center': FAQMain,
    '/printer-buying-guide': PrinterBuyingGuide,
    '/guides-resources': GuidesResources,
  };

  if (staticMap[pathname]) return renderWithShell(React.createElement(staticMap[pathname]));

  return renderWithShell(<UnderConstruction />);

  function renderWithShell(node) {
    // layout.jsx already provides Header, ScrollToTop, Footer - just return the page content
    return node;
  }
}
