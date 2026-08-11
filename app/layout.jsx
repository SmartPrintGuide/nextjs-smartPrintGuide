import './globals.css';
import Providers from '@/components/Providers';
import AppShell from '@/components/AppShell';
import JivoChat from '@/components/JivoChat';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://smartprintguide.com'),
  title: {
    default: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
    template: '%s | SmartPrintGuide',
  },
  description: 'SmartPrintGuide is your source for printers, ink, toner, and office supplies. Shop home and office printers with fast shipping, expert support, and product guides.',
  keywords: [
    'smartprintguide',
    'printers',
    'ink cartridges',
    'toner cartridges',
    'office printers',
    'home printers',
    'printer supplies',
    'printer buying guide',
    'printer reviews',
    'printing solutions',
    'laser printers',
    'inkjet printers',
  ],
  authors: [{ name: 'SmartPrintGuide' }],
  creator: 'SmartPrintGuide',
  publisher: 'SmartPrintGuide',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-CA': '/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
    description: 'SmartPrintGuide helps you find the best printers, ink, toner, and office printing guides with fast shipping and expert support.',
    url: 'https://smartprintguide.com/',
    siteName: 'SmartPrintGuide',
    images: [
      {
        url: 'https://smartprintguide.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartPrintGuide | Printers, Ink, Toner, and Office Supplies',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
    description: 'Discover printing guides, printer deals, ink, toner, and office printer solutions at SmartPrintGuide.',
    images: ['https://smartprintguide.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    language: 'English',
    distribution: 'global',
    'revisit-after': '7 days',
    'msapplication-TileColor': '#f97316',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'application-name': 'SmartPrintGuide',
    'apple-mobile-web-app-title': 'SmartPrintGuide',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Script
          id="google-ads-gtag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18376939559"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18376939559');`}
        </Script>
        <Providers>
          <AppShell>{children}</AppShell>
          <JivoChat />
        </Providers>
      </body>
    </html>
  );
}
