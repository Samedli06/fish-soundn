import { JSX } from "react";

export interface IButtonProperty1DefaultProps {
  text?: string;
  property1?: "default" | "variant-2" | "variant-3";
  className?: string;
}

export const ButtonProperty1Default = ({
  text = "button",
  property1 = "default",
  className,
  ...props
}: IButtonProperty1DefaultProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bg-[#ff0d0d] rounded-[69px] pt-[15px] pr-[23px] pb-[15px] pl-[23px] flex flex-row gap-2.5 items-center justify-center relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-center">
        {text}{" "}
      </div>
    </div>
  );
};
