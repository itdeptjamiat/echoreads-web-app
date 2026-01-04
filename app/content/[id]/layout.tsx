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
  // Children's Digests
  { id: 'adventures-wonderland', title: 'Paigam For Kids', description: 'A magical journey through enchanting stories that spark imagination and creativity. This delightful digest features colorful characters, exciting adventures, and valuable life lessons that inspire young readers to dream big and explore the world around them.', imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1755120079051-v3eqssv4yw.jpg', category: 'Children' },
  { id: 'fun-learning-stories', title: 'Fun Learning Stories', description: 'Educational tales that make learning enjoyable and engaging for young minds. This digest combines fun narratives with important concepts, helping children develop reading skills while discovering new ideas about science, nature, friendship, and everyday adventures.', imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754468368740-6v5vpx5w3li.jpg', category: 'Children' },
  { id: 'magical-tales-collection', title: 'Magical Tales Collection', description: 'Enchanting stories filled with wonder, friendship, and adventure. This collection brings together timeless tales that capture the hearts of young readers, featuring brave heroes, magical creatures, and exciting quests that teach important values like kindness, courage, and empathy.', imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705416524-jgx366ewqks.jpg', category: 'Children' },
  { id: 'kids-corner-adventures', title: 'Kids Corner Adventures', description: 'Exciting stories designed to inspire young minds and foster curiosity. This digest features age-appropriate content that encourages exploration, creativity, and learning through engaging narratives, interactive elements, and beautiful illustrations that make reading a joyful experience.', imagePath: 'https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705612592-h11yf0v64wq.jpg', category: 'Children' },
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

