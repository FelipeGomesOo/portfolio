"use client";
import { animationDelay } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { Button } from "@/components/Button";
type Props = {
  locale: string;
  className?: string;
};

export default function LocaleSwitcherSelect({ locale, className }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const handleClick = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: locale },
    );
  };
  return (
    <Button
      style={animationDelay(5)}
      className={className}
      value={locale}
      onClick={() => handleClick(locale)}
    >
      {locale.toUpperCase()}
    </Button>
  );
}
