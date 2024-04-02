import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  index?: number;
};
export default function FadeIn({ children, index }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(10%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: `calc(0.2s + 0.05s* ${index})`,
      }}
    >
      {children}
    </div>
  );
}
