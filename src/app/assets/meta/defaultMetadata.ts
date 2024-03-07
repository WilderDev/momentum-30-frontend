import baseUrl from '@/app/lib/common/baseUrl';
import { Metadata } from 'next';

const title = 'TSK | TSK';
const description = 'TSK';
const images = [
  {
    url: '/static/brand/logo-banner.png',
    alt: 'TSK logo banner',
    width: 0,
    height: 0,
  },
  {
    url: '/static/brand/og-facebook.png',
    alt: 'TSK Facebook Cover',
    width: 0,
    height: 0,
  },
];

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  applicationName: title,
  creator: 'Atlas Automations',
  colorScheme: 'only light',
  themeColor: '#344764', // TODO
  assets: '/static',
  metadataBase: new URL(baseUrl),
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
  bookmarks: [baseUrl + '/'],
  openGraph: {
    type: 'website',
    siteName: 'TSK',
    title,
    description,
    url: baseUrl,
    images,
    locale: 'en_US',
    countryName: 'United States',
    emails: [], // TODO
    ttl: 60 * 60 * 24 * 7, // 1 week
  },
  icons: {
    icon: [
      { url: '/static/favicon/maskable_icon.png' },
      new URL('/static/favicon/maskable_icon.png', baseUrl).toString(),
    ],
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/static/favicon/apple-touch-icon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@will_atlas', // TODO
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
