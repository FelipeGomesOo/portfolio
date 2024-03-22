import {Link} from '@/navigation';
import { useTranslations } from 'next-intl';
export default function PortfolioSeeAll() {
    const t = useTranslations('Portfolio'); 
    return (  
        <>
            <Link
                className="mt-10 block bg-primary-light/10 hover:bg-blue hover:text-[#fff] text-center py-4"
                href="/projects">
                {t("see_also")}
            </Link>
        </>
    )
}