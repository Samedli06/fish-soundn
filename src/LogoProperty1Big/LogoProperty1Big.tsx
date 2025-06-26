import { JSX } from "react";

export interface ILogoProperty1BigProps {
  property1?: "big" | "variant-2";
  className?: string;
}

export const LogoProperty1Big = ({
  property1 = "big",
  className,
  ...props
}: ILogoProperty1BigProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "flex flex-col gap-[8.06px] items-start justify-start shrink-0 w-[108.75px] h-[93px] relative overflow-visible " +
        className +
        " " +
        variantsClassName
      }
      src="logo-property-1-big.svg"
    />
  );
};
