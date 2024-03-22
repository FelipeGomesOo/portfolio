'use client';
import {usePathname, useRouter} from '@/navigation'; 
import {useTransition} from 'react';
import {useParams} from 'next/navigation';
import {useLocale} from 'next-intl';
type Props = { 
    locale: string;
  };

export default function LocaleSwitcherSelect({locale}: Props) {
    const curLocale = useLocale();  
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const activeStyle = (value: string) => {
        if(value === curLocale) return "font-semibold";
        return "";
      }
    const handleClick = (locale:string) => {
        startTransition(() => { 
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params` 
                {pathname, params},
                {locale: locale}
            );
        }); 
    }
    return (
        <button 
            className={activeStyle(locale)}
            value={locale}
            onClick={() => handleClick(locale)}
        >
            {locale.toUpperCase()}
        </button>
    )
}