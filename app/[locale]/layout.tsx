import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { Metadata, ResolvingMetadata } from 'next'; 
import { getTranslations } from 'next-intl/server'
 
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'], 
}) 

type Props = {
  params: { locale: string } 
}
export async function generateMetadata( { params:{locale} }: Props, parent: ResolvingMetadata ): Promise<Metadata> {  

  const t = await getTranslations({locale, namespace: 'HomePage.metaData'});
 
  return {
    title:  t('title'),
    description: t('description'),     
  }
}
export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale} className={poppins.className}>
      <body> 
        <Header />
        {children}
      </body>
    </html>
  )
}
