import type { Metadata } from 'next';
import { Inter, Noto_Sans_Georgian } from 'next/font/google';
import './globals.css';
import { locales } from '../../lib/i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { getDictionary } from '../../lib/dictionary';

// Use English standard font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Use Georgian font 
const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  variable: '--font-noto-georgian'
});

export const metadata: Metadata = {
  title: 'საგზაო მოძრაობის ორგანიზების სქემები თბილისში',
  description: 'პროფესიონალური სატრანსპორტო ორგანიზების სქემების მომზადება და შეთანხმება თბილისის მერიასთან და საპატრულო პოლიციასთან.',
  keywords: [
    'საგზაო მოძრაობის ორგანიზების სქემა',
    'სატრანსპორტო ორგანიზების სქემა',
    'დროებითი საგზაო სქემები',
    'გზის მოძრაობის ორგანიზება',
    'მოძრაობის სქემის შეთანხმება',
    'საპატრულო პოლიციასთან შეთანხმება',
    'თბილისის ტრანსპორტის სააგენტოსთან შეთანხმება',
    'საგზაო მოძრაობის სქემა',
    'მოძრაობის ორგანიზების სქემა',
    'დროებითი საგზაო სქემა'
  ]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansGeorgian.variable} font-sans antialiased bg-[var(--color-background)] text-gray-800 flex flex-col min-h-screen`}>
        <Navbar dict={dict} lang={lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
        <FloatingContact />
      </body>
    </html>
  );
}
