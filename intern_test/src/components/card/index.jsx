import { Card, Text } from "@radix-ui/themes";

export function CardChoose({
  icon,
  title,
  desc,
  btn,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-[url('/contact-bg.svg')] bg-cover bg-center bg-no-repeat md:h-[245px] h-full w-full rounded-md",
    secondary: "border border-[#DDDDDD] w-full rounded-md",
    third:
      "bg-[url('/bg-cta.svg')] bg-cover bg-center bg-no-repeat h-full w-full rounded-md",
  };

  return (
    <Card className={`${variants[variant]} ${className}`}>
      {icon && (
        <Text as="div" className="w-10 h-10" weight="bold">
          {icon}
        </Text>
      )}
      <Text as="div" weight="bold" className="font-jakarta">
        {title}
      </Text>

      <Text
        as="div"
        className="font-jakarta md:text-[16px] text-[12px] font-normal"
      >
        {desc}
      </Text>
      {btn && (
        <Text
          as="div"
          className="font-jakarta border border-redtext rounded-md font-medium w-fit"
        >
          {btn}
        </Text>
      )}
    </Card>
  );
}
