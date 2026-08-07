"use client";

import Script from 'next/script';
import { MessageCircle } from 'lucide-react';

const jivoWidgetId = process.env.NEXT_PUBLIC_JIVO_WIDGET_ID || 'XIBgC2jM7P';

export default function JivoChat() {
  const openChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api?.open) {
      window.jivo_api.open();
    }
  };

  return (
    <>
      <Script
        src={`https://code.jivosite.com/widget/${jivoWidgetId}`}
        strategy="afterInteractive"
      />
      <button
        type="button"
        aria-label="Open chat"
        title="Chat with Smart Print Guide"
        onClick={openChat}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </button>
    </>
  );
}
