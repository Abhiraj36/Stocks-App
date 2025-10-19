'use client';

import React, { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
// If you already have a cn utility (like in ShadCN projects), use this:
// import { cn } from '@/lib/utils';
import clsx from 'clsx'; // otherwise use clsx (simple className combiner)

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">
          {title}
        </h3>
      )}

      <div
        ref={containerRef}
        className={clsx('tradingview-widget-container', className)}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: '100%' }}
        />
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
