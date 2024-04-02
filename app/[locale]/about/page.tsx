import Experience from "./Experience";
import Academic from "./Academic";
import Skillset from "./Skillset";
import Intro from "./Intro";
import Footer from "@/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <section className="relative z-10  mb-[90svh]  bg-[#fff] pb-24 pt-[40%] shadow-lg shadow-[black] lg:pt-[15%]">
        <Intro />
        <Experience />
        <Academic />
        <Skillset />
      </section>
      <Footer />
    </>
  );
}
