import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import TermsClient from './TermsClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Service',
  description: 'EchoReads Terms of Service - Read our terms and conditions for using our digital reading platform. Understand your rights and responsibilities.',
  url: '/terms',
});

export default function Terms() {
  return <TermsClient />;
}
