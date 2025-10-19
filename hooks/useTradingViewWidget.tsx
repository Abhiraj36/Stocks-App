'use client';
import { useEffect, useRef } from "react";

/**
 * Hook to dynamically load a TradingView widget script.
 * @param scriptUrl - The TradingView script URL (e.g. "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js")
 * @param config - Widget configuration object
 * @param height - Height of the widget container
 */
const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;

    // Set up container div
    containerRef.current.innerHTML = `
      <div class="tradingview-widget-container__widget" style="width:100%; height:${height}px;"></div>
    `;

    // Create script element
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidget;
