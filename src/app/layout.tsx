// * Imports
// Styles
import '@/app/assets/styles/globals.css';
// Next / Vercel
import dynamic from 'next/dynamic';
// import { Analytics } from '@vercel/analytics/react';
// Lib
import cn from './lib/common/classNames';
// Fonts / Meta
import { baskervville, inter } from './assets/fonts/googleFonts';
import { defaultMetadata } from './assets/meta/defaultMetadata';
// Dynamic
const Toast = dynamic(() => import('@/app/components/global/Toast'), {
  ssr: false,
});

// * Props
interface ILayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

// * Layout: RootLayout
export default function RootLayout({ children, modal }: ILayoutProps) {
  // * Render
  return (
    <html lang="en" className={cn(inter.variable, baskervville.variable)}>
      <body suppressHydrationWarning>
        {/* Children */}
        {children}

        {/* Modal */}
        {modal}

        {/* Toast Container */}
        <Toast />

        {/* Analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

// * Metadata
export const metadata = defaultMetadata;
