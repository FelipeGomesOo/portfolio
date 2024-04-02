import LogoFull from "@/components/LogoFull";

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="copyright" className=" pb-4">
      <div className="container ">
        <div className="flex items-center justify-between border-t-4 border-t-[#fff] pt-4">
          <LogoFull className="w-[7rem] fill-[#fff] md:w-[10rem]" />
          <small className=" text-[#fff] ">
            © {currentYear} – Felipe Gomes
          </small>
        </div>
      </div>
    </section>
  );
}
