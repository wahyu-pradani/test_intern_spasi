import { Button } from "@radix-ui/themes/dist/cjs/index.js";

export function Btn({ text, variant = "primary", className = "" }) {
  const baseStyle =
    "md:px-[24px] md:py-[10px] px-[18px] py-[8px] rounded-md md:text-[14px] text-[12px] font-medium transition";

  const variants = {
    primary: "bg-redtext text-white hover:bg-red-700 font-jakarta",
    secondary:
      "border border-redtext font-jakarta rounded-md font-medium transition",
    third:
      "bg-white text-redtext font-jakarta font-medium text-[14px] px-[24px] py-[10px]",
  };

  return (
    <Button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {text}
    </Button>
  );
}
