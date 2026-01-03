import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import PricingClient from './PricingClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pricing Plans - EchoReads Premium Subscriptions',
  description: 'Choose from Echo Plus or Echo Pro subscription plans. Unlock unlimited access to premium magazines, articles, and digests. Flexible pricing for Pakistan and international users.',
  url: '/pricing',
});

export default function Pricing() {
  return <PricingClient />;
}
