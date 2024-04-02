import { useLocale } from "next-intl";
import LocaleButton from "@/components/LocaleButton";

export default function LocaleSwitcher({ className }: { className: string }) {
  let locale = useLocale() === "pt" ? "en" : "pt";
  return <LocaleButton key={locale} locale={locale} className={className} />;
}
