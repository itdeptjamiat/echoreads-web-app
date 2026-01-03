import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

// Hardcoded magazines for metadata generation
const hardcodedMagazines = [
  { id: 'genz', title: 'GenZ', description: 'This Urdu edition focuses specifically on Generation Z\'s remarkable success in business and entrepreneurship.', imagePath: '/magzines/GenZ.webp', category: 'Business' },
  { id: 'freedom', title: 'Freedom', description: 'This edition explores the concept of freedom from both Islamic and universal human rights perspectives.', imagePath: '/magzines/Freedom.webp', category: 'Philosophy' },
  { id: 'jamal-ul-deen-afgani', title: 'Jamal-UL-Deen Afgani', description: 'This edition centers on Jamaluddin Afghani, a pioneering Muslim intellectual and reformer.', imagePath: '/magzines/Jamal-UL-Deen Afgani.webp', category: 'History' },
  { id: 'the-global-landscape', title: 'The Global Landscape The Islamic Movement', description: 'This edition analyzes the current global political landscape and how Islamic movements are positioning themselves.', imagePath: '/magzines/The Global Landscape The Islamic Movement.webp', category: 'Politics' },
  { id: 'gaza-palestinian-resistance', title: 'Gaza and Palestinian resistance', description: 'This special edition is dedicated entirely to Gaza and Palestinian resistance.', imagePath: '/magzines/Gaza and Palestinian resistance.webp', category: 'Social Issues' },
  { id: 'toxic-call-center', title: 'The Toxic Call Center', description: 'This edition addresses the mental health crisis faced by call center employees in Pakistan.', imagePath: '/magzines/The Toxic Call Center.webp', category: 'Social Issues' },
  { id: 'decolonization', title: 'Decolonization is not just a right it\'s obligation', description: 'This powerful edition argues that decolonization is not merely a right but a moral obligation.', imagePath: '/magzines/decolonization is not just a right it\'s obligation.webp', category: 'Politics' },
  { id: 'mukamat-e-iran', title: 'Mukamat-e-iran bzurg', description: 'This Urdu edition focuses on Iran\'s resistance movements and their significance.', imagePath: '/magzines/Mukamat-e-iran bzurg.webp', category: 'Politics' },
  { id: 'real-cost-capitalist', title: 'The Real Cost of Capitalist Progress', description: 'This critical edition examines the hidden costs and consequences of capitalist development.', imagePath: '/magzines/The Real Cost of Capitalist Progress.webp', category: 'Philosophy' },
  { id: 'essence-salah', title: 'The Essence of Salah Prayer', description: 'This spiritually focused edition explores the deep spiritual and psychological dimensions of Islamic prayer.', imagePath: '/magzines/The Essence of Salah Prayer.webp', category: 'Religion' },
  { id: 'foundations-love-prophet', title: 'The foundations of love for Prophet Muhammad (Peace Be Upon Him)', description: 'This Urdu edition discusses the foundations of love for Prophet Muhammad.', imagePath: '/magzines/the foundations of love for Prophet Muhammad (Peace Be Upon Him).webp', category: 'Religion' },
  { id: 'islamophobia', title: 'Islamophobia Questions Value System', description: 'Islamophobia Questions Value System highlights how prejudice against Muslims doesn\'t merely harm individuals.', imagePath: '/magzines/Islamophobia Questions Value System.webp', category: 'Social Issues' },
];

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const magazine = hardcodedMagazines.find(m => m.id === params.id);
  
  if (!magazine) {
    return generateSEOMetadata({
      title: 'Content Not Found',
      description: 'The content you are looking for could not be found.',
      url: `/content/${params.id}`,
      noindex: true,
    });
  }

  return generateSEOMetadata({
    title: `${magazine.title} - ${magazine.category} Magazine`,
    description: magazine.description,
    image: magazine.imagePath,
    imageAlt: `${magazine.title} - ${magazine.category} magazine cover`,
    url: `/content/${params.id}`,
    type: 'article',
  });
}

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

