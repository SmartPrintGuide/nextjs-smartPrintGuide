"use client";

import Script from 'next/script';

const jivoWidgetId = process.env.NEXT_PUBLIC_JIVO_WIDGET_ID || 'XIBgC2jM7P';

export default function JivoChat() {
  return <Script src={`https://code.jivosite.com/widget/${jivoWidgetId}`} strategy="afterInteractive" />;
}
