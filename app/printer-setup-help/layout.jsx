import ClientLayout from '@/components/printer-setup/ClientLayout';
import Script from 'next/script'; // Fixed default import

export const metadata = {
  title: 'Printer Setup Help – Connect Printer to Wi‑Fi or Computer',
  description:
    'Get printer setup help for Wi‑Fi, computer connection and offline issues. Learn how to add a printer to a computer, troubleshoot connection problems and fix common printer offline issues.',
};

export default function PrinterSetupLayout({ children }) {
  return (
    <>
      {/* ClickCease Script */}
      <Script
        id="clickcease-script"
        src="https://ob.sornavellon.com/i/6cd83818f302977b2729291478f5574c.js"
        strategy="afterInteractive"
      />

      <noscript>
        <iframe
          src="https://ob.sornavellon.com/ns/6cd83818f302977b2729291478f5574c.html?ch="
          width="0"
          height="0"
          style={{ display: 'none' }}
        ></iframe>
      </noscript>

      <ClientLayout>{children}</ClientLayout>
    </>
  );
}