import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import SupportClient from './SupportClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Support - Contact EchoReads',
  description: 'Get in touch with EchoReads support. WhatsApp, email (ceo@echoreads.online, iqbal@echoreads.online), and Project Director contact.',
  url: '/support',
});

export default function Support() {
  return <SupportClient />;
}
