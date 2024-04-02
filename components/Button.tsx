import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onClick?: any;
};

export const Button = ({
  children,
  size = "medium",
  className,
  style,
  value,
  onClick,
}: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "rounded-full border transition-all hover:bg-primary-dark hover:text-[white] ",
        sizeClassNames[size],
        className,
      )}
      value={value}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
