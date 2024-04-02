import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
export default function PortfolioSeeAll() {
  const t = useTranslations("Portfolio");
  return (
    <>
      <Link className="reveal button large mt-10 block" href="/projects">
        {t("see_also")}
      </Link>
    </>
  );
}
