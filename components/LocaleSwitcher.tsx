import {locales} from '@/navigation';
import LocaleButton from '@/components/LocaleButton';

export default function LocaleSwitcher( ) {
  return (
    locales.map((locale: string) => (
      <LocaleButton key={locale} locale={locale}  /> 
    ))  
)}