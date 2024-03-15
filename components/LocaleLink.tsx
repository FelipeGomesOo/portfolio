'use client'
import {useLocale} from 'next-intl';
import {Link, locales} from '@/navigation';
import { usePathname } from 'next/navigation'

type Props = {
  locale: typeof locales[number];
};

export default function LocaleLink({locale}: Props) {
  const curLocale = useLocale(); 
  const curPath = usePathname().slice(3) || '/';
 

  return (
    <Link
      href={curPath}
      locale={locale}
      className={`${curLocale === locale && "font-semibold"}` }
      alt={curPath}
    >
      {locale.toUpperCase()}
    </Link>
  );
}