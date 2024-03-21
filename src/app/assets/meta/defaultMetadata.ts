import { getFEBaseUrl } from '@/lib/common/baseUrl';
import { Metadata } from 'next';

const title = 'Momentum 30 | Exercise Made Easy';
const description =
  "Momentum 30 is a fitness app that makes exercise easy and fun. Get started today! You're only 1 pushup away from a better you.";
const images = [
  {
    url: '/static/brand/logo-banner.png',
    alt: 'TSK logo banner',
    width: 1024,
    height: 1024,
  },
  {
    url: '/static/brand/og-facebook.png',
    alt: 'TSK Facebook Cover',
    width: 1024,
    height: 1024,
  },
];

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  applicationName: title,
  creator: 'William Wilder (Codefi Cape Evening 2024)',
  colorScheme: 'only light',
  themeColor: '#06b6d4',
  assets: '/static',
  metadataBase: new URL(getFEBaseUrl()),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  // TODO
  keywords: [
    // Brand keywords
    // Basic keywords
    // Long-tail keywords
  ],
  bookmarks: [getFEBaseUrl() + '/'],
  openGraph: {
    type: 'website',
    siteName: 'TSK',
    title,
    description,
    url: getFEBaseUrl(),
    images,
    locale: 'en_US',
    countryName: 'United States',
    emails: [], // TODO
    ttl: 60 * 60 * 24 * 7, // 1 week
  },
  icons: {
    icon: [
      { url: '/static/favicon/maskable_icon.png' },
      new URL('/static/favicon/maskable_icon.png', getFEBaseUrl()).toString(),
    ],
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/static/favicon/apple-touch-icon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@WilderDev',
    title,
    description,
    images,
  },
  robots: {
    follow: true,
    index: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
    notranslate: false,
    noarchive: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};
