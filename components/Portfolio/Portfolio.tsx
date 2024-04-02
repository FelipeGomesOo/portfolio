import PortfolioContainer from "@/components/Portfolio/PortfolioContainer";
import PortfolioSeeAll from "@/components/Portfolio/PortfolioSeeAll";
import { fetchPortfolioData } from "@/lib/utils";
import { useLocale } from "next-intl";

export default async function Portfolio({
  filterable,
  limit,
  seeAll = true,
}: any) {
  const lang = useLocale();
  const projects = await fetchPortfolioData(lang);

  return (
    <section id="portfolio" className="container">
      {projects && (
        <PortfolioContainer
          filterable={filterable}
          limit={limit}
          visibleProjects={projects}
        />
      )}
      {seeAll && <PortfolioSeeAll />}
    </section>
  );
}
