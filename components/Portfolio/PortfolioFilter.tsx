import { useLocale } from "next-intl";
export default function PortfolioFilter({ onFilterBy, condition }: any) {
  const activeStyle = (value: string) => {
    if (value === condition) return "text-blue font-semibold  active";
    return "";
  };
  const all = useLocale() === "pt" ? "Todos" : "All";
  return (
    <div className="my-6 flex gap-5 text-[1.5rem] md:my-10">
      <button
        className={`${activeStyle("")} reveal link`}
        onClick={onFilterBy}
        value=""
      >
        {all}
      </button>
      <button
        className={`${activeStyle("code")} reveal link`}
        onClick={onFilterBy}
        value="code"
      >
        Code
      </button>
      <button
        className={`${activeStyle("design")} reveal link`}
        onClick={onFilterBy}
        value="design"
      >
        Design
      </button>
    </div>
  );
}
