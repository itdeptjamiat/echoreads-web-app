import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import PaymentClient from './PaymentClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Payment on Web Coming Soon',
  description: 'Web payments are coming soon to EchoReads. Download our app for the best reading experience with secure payment options.',
  url: '/payment',
  noindex: true, // Coming soon page - don't index
});

export default function Payment() {
  return <PaymentClient />;
}
