import type { SVGProps } from "react";
import { icons } from "./Icons";
import type { IconName } from "./Icons";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  //   className?: string;
}

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  //   className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      //   className={className}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
