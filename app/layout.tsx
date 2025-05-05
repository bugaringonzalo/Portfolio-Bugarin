import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/context/LanguageContext'; // Import the provider


// Local font configuration
const jakarta = localFont({
  src: [
    {
      path: '../public/fonts/PlusJakartaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PlusJakartaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PlusJakartaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/PlusJakartaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jakarta',
});

// Metadata
export const metadata: Metadata = {
  title: 'John Doe | Web Developer',
  description: 'Professional web developer specializing in React, Node.js, and modern web technologies',
  keywords: ['web developer', 'React', 'Node.js', 'frontend developer', 'portfolio'],
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'John Doe | Web Developer',
    description: 'Professional web developer specializing in React, Node.js, and modern web technologies',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Web Developer',
    description: 'Professional web developer specializing in React, Node.js, and modern web technologies',
    creator: '@johndoe',
  },
};

async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`../messages/en.json`)).default;
  }
}

export default async function RootLayout({
  children,
  params: { locale = 'en' }
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const messages = await getMessages(locale);

  return (
    // Remove lang={locale} if you don't need it for other purposes
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrap with LanguageProvider */}
          <LanguageProvider>
            {/* Remove NextIntlClientProvider */}
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}