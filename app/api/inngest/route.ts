// stocks_app/app/api/inngest/route.ts
import { serve } from 'inngest/next';
import { inngest } from '@/lib/inngest/client';
import { sendSignUpEmail, sendDailyNewsSummary } from '@/lib/inngest/functions';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail, sendDailyNewsSummary],

  // @ts-ignore
  onEvent: (event) => {
    console.log('🔔 Inngest event received:', event.name, event.data);
  },

  // @ts-ignore
  onError: (err) => {
    console.error('❌ Inngest function error:', err);
  },

  // @ts-ignore
  onStart: (fn) => {
    console.log(`🚀 Function started: ${fn.id}`);
  },

  // @ts-ignore
  onFinish: (fn) => {
    console.log(`✅ Function finished: ${fn.id}`);
  },
});
