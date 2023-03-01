import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/hooks/useAuth';
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <NextNProgress
          color="#E50914"
          startPosition={0.4}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{
            showSpinner: false
          }}
        />
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}
