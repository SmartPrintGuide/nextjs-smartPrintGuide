import ClientRouter from '../ClientRouter';

const routeMetadata = {
  '/': {
    title: 'SmartPrintGuide - Printers, Ink, Toner & Office Printer Guides',
    description: 'SmartPrintGuide helps you choose the right printer, ink, toner, and office printing supplies with fast shipping and expert support.',
  },
  '/product-category/all-in-one-printers': {
    title: 'All-in-One Printers | SmartPrintGuide',
    description: 'Shop all-in-one printers for home and office. Compare multifunction printers for copying, scanning, printing, and faxing.',
  },
  '/home-printer': {
    title: 'Best Home Printers | SmartPrintGuide',
    description: 'Discover the best home printers for photos, documents, and everyday use with ink and toner options.',
  },
  '/office-printer': {
    title: 'Office Printers & Business Printing Solutions | SmartPrintGuide',
    description: 'Explore reliable office printers built for business workflows, high-volume printing, and low running costs.',
  },
  '/product-category/large-format-printers': {
    title: 'Large Format Printers | SmartPrintGuide',
    description: 'Find large format printers for banners, posters, CAD drawings, and wide-format design printing.',
  },
  '/product-category/inkjet-printers': {
    title: 'Inkjet Printers | SmartPrintGuide',
    description: 'Shop inkjet printers for vivid color, photo-quality prints, and flexible home or office use.',
  },
  '/product-category/laser-printers': {
    title: 'Laser Printers | SmartPrintGuide',
    description: 'Compare laser printers for fast black-and-white and color output with durable toner performance.',
  },
  '/product-category/led-printers': {
    title: 'LED Printers | SmartPrintGuide',
    description: 'Discover LED printers with energy-efficient printing, reliable text quality, and compact designs.',
  },
  '/product-category/ink-toner': {
    title: 'Ink & Toner Cartridges | SmartPrintGuide',
    description: 'Buy ink and toner cartridges for HP, Canon, Brother, Epson and more with fast shipping and printer compatibility details.',
  },
  '/customer-service': {
    title: 'Customer Service & Support | SmartPrintGuide',
    description: 'Get help with your printer order, returns, setup, and support from SmartPrintGuide customer service.',
  },
  '/cart': {
    title: 'Shopping Cart | SmartPrintGuide',
    description: 'Review your cart items, update quantities, and proceed to checkout for printers, ink, and toner.',
  },
  '/checkout': {
    title: 'Secure Checkout | SmartPrintGuide',
    description: 'Complete your order securely for printers, ink, toner, and office supplies with fast shipping.',
  },
  '/profile': {
    title: 'My Profile | SmartPrintGuide',
    description: 'Manage your account, shipping details, and order history on SmartPrintGuide.',
  },
  '/profile/order-history': {
    title: 'Order History | SmartPrintGuide',
    description: 'View past purchases, shipping status, and order details from SmartPrintGuide.',
  },
  '/order-history': {
    title: 'Order History | SmartPrintGuide',
    description: 'View past purchases, shipping status, and order details from SmartPrintGuide.',
  },
  '/blogs': {
    title: 'SmartPrintGuide Blog | Printer Guides & Tips',
    description: 'Read printer buying guides, maintenance tips, and printing best practices from SmartPrintGuide.',
  },
  '/blogs/choosing-right-printer-home-office': {
    title: 'Choose the Right Printer for Your Home Office | SmartPrintGuide',
    description: 'Learn how to select the right home office printer for your workflow, budget, and print quality needs.',
  },
  '/blogs/printer-maintenance-guide': {
    title: 'Printer Maintenance Guide | SmartPrintGuide',
    description: 'Keep your printer running smoothly with cleaning, maintenance, and troubleshooting tips from SmartPrintGuide.',
  },
  '/blogs/save-printing-costs-guide': {
    title: 'Save Money on Printing Costs | SmartPrintGuide',
    description: 'Learn practical ways to save on ink, toner, paper, and printer operation costs with SmartPrintGuide advice.',
  },
  '/blogs/top-7-printing-mistakes': {
    title: 'Top 7 Printing Mistakes to Avoid | SmartPrintGuide',
    description: 'Avoid common printing mistakes that waste paper, ink, and time with SmartPrintGuide printing best practices.',
  },
  '/blogs/small-business-printing-essential-tools': {
    title: 'Small Business Printing Tools & Setup | SmartPrintGuide',
    description: 'Discover the essential printers and printing tools every small business needs to stay productive and cost-efficient.',
  },
  '/faq': {
    title: 'Printer FAQ | SmartPrintGuide',
    description: 'Find answers to common questions about printers, ink, toner, orders, shipping, and returns.',
  },
  '/about': {
    title: 'About SmartPrintGuide',
    description: 'Learn about SmartPrintGuide, your source for printers, ink, toner, and printing guides.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | SmartPrintGuide',
    description: 'Read the SmartPrintGuide privacy policy for customer data, cookies, and website use.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | SmartPrintGuide',
    description: 'Review SmartPrintGuide terms and conditions for purchases, accounts, and website use.',
  },
  '/refund-return-policy': {
    title: 'Refund & Return Policy | SmartPrintGuide',
    description: 'Learn how to request returns and refunds for SmartPrintGuide printer and supply orders.',
  },
  '/return-exchange-policy': {
    title: 'Return & Exchange Policy | SmartPrintGuide',
    description: 'Review SmartPrintGuide return and exchange eligibility, process, and timelines.',
  },
  '/shipping-policy': {
    title: 'Shipping Policy | SmartPrintGuide',
    description: 'Read SmartPrintGuide shipping details, delivery estimates, and order handling policies.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | SmartPrintGuide',
    description: 'Understand SmartPrintGuide cookie usage and tracking technology to improve your experience.',
  },
  '/accessibility-statement': {
    title: 'Accessibility Statement | SmartPrintGuide',
    description: 'Read SmartPrintGuide accessibility commitments for an inclusive website experience.',
  },
  '/disclaimer': {
    title: 'Disclaimer | SmartPrintGuide',
    description: 'Legal disclaimer covering SmartPrintGuide content, accuracy, and website use.',
  },
  '/consumer-rights': {
    title: 'Consumer Rights | SmartPrintGuide',
    description: 'Learn about consumer rights and protections for SmartPrintGuide customers.',
  },
  '/do-not-sell-or-share-my-personal-information': {
    title: 'Do Not Sell My Personal Information | SmartPrintGuide',
    description: 'Submit a request under privacy rights to not sell or share your personal information.',
  },
  '/track-order': {
    title: 'Track Your Order | SmartPrintGuide',
    description: 'Track your printer and supply order status in real time with SmartPrintGuide.',
  },
  '/returns-exchanges': {
    title: 'Returns & Exchanges | SmartPrintGuide',
    description: 'Request returns or exchanges and learn the SmartPrintGuide return process.',
  },
  '/help-center': {
    title: 'Help Center | SmartPrintGuide',
    description: 'Get support, guidance, and answers from SmartPrintGuide help resources.',
  },
  '/printer-buying-guide': {
    title: 'Printer Buying Guide | SmartPrintGuide',
    description: 'Read SmartPrintGuide printer buying tips, comparison advice, and recommended features.',
  },
  '/guides-resources': {
    title: 'Printer Guides & Resources | SmartPrintGuide',
    description: 'Explore printing guides, resources, and best practices for printers, ink, and toner.',
  },
  '/admin/login': {
    title: 'Admin Login | SmartPrintGuide',
    description: 'SmartPrintGuide admin login page.',
    robots: { index: false, follow: false },
  },
  '/admin': {
    title: 'Admin Dashboard | SmartPrintGuide',
    description: 'SmartPrintGuide admin dashboard.',
    robots: { index: false, follow: false },
  },
  '/admin/dashboard': {
    title: 'Admin Dashboard | SmartPrintGuide',
    description: 'SmartPrintGuide admin dashboard.',
    robots: { index: false, follow: false },
  },
  '/admin/categories': {
    title: 'Admin Categories | SmartPrintGuide',
    description: 'Manage categories in SmartPrintGuide admin.',
    robots: { index: false, follow: false },
  },
  '/admin/products': {
    title: 'Admin Products | SmartPrintGuide',
    description: 'Manage products in SmartPrintGuide admin.',
    robots: { index: false, follow: false },
  },
  '/admin/customers': {
    title: 'Admin Customers | SmartPrintGuide',
    description: 'Manage customers in SmartPrintGuide admin.',
    robots: { index: false, follow: false },
  },
  '/admin/orders': {
    title: 'Admin Orders | SmartPrintGuide',
    description: 'Manage orders in SmartPrintGuide admin.',
    robots: { index: false, follow: false },
  },
  '/admin/chat': {
    title: 'Admin Chat | SmartPrintGuide',
    description: 'Manage admin chats in SmartPrintGuide.',
    robots: { index: false, follow: false },
  },
  '/admin/analytics': {
    title: 'Admin Analytics | SmartPrintGuide',
    description: 'View SmartPrintGuide admin analytics and reports.',
    robots: { index: false, follow: false },
  },
  '/admin/settings': {
    title: 'Admin Settings | SmartPrintGuide',
    description: 'Manage SmartPrintGuide admin settings.',
    robots: { index: false, follow: false },
  },
};

const defaultMetadata = {
  title: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
  description: 'Find the best printers, ink, toner, and printing guides at SmartPrintGuide. Shop home and office printing supplies with expert support.',
};

const productMetadata = {
  title: 'Printer Product Details | SmartPrintGuide',
  description: 'Explore printer product details, specs, and buying information from SmartPrintGuide.',
};

function getPathFromParams(params) {
  const slugArray = params?.slug;
  return slugArray && slugArray.length ? `/${slugArray.join('/')}` : '/';
}

function getMetadataForPath(path) {
  if (routeMetadata[path]) return routeMetadata[path];
  if (path.startsWith('/blogs/')) {
    return routeMetadata['/blogs'];
  }
  if (path.startsWith('/product/')) {
    return productMetadata;
  }
  if (path.startsWith('/admin')) {
    return { ...routeMetadata['/admin'], robots: { index: false, follow: false } };
  }
  return defaultMetadata;
}

export async function generateMetadata({ params }) {
  const path = getPathFromParams(params);
  const pageMeta = getMetadataForPath(path);
  const canonicalUrl = `https://smartprintguide.com${path}`;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [
      'smartprintguide',
      'printers',
      'ink cartridges',
      'toner cartridges',
      'printer supplies',
      'printer guides',
      'buy printers online',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      title: pageMeta.title,
      description: pageMeta.description,
      url: canonicalUrl,
      siteName: 'SmartPrintGuide',
      images: [
        {
          url: 'https://smartprintguide.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'SmartPrintGuide - Printers, Ink, Toner, and Office Supplies',
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: ['https://smartprintguide.com/twitter-image.jpg'],
    },
    robots: pageMeta.robots || {
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
  };
}

export default function CatchAllPage() {
  return <ClientRouter />;
}
