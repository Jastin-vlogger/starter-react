import React, { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextColor = "default" | "light" | "primary";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  weight?: FontWeight;
  color?: TextColor;
  children: ReactNode;
  className?: string;
  [x: string]: any;
}
const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
  weight = "bold" as "light" | "normal" | "medium" | "semibold" | "bold",
  color = "default" as "default" | "light" | "primary",
  ...props
}) => {
  const renderHeading = () => {
    const weightClass = weightMap[weight] || weightMap.bold;
    const colorClass = colorMap[color] || colorMap.default;
    const sizeClass = sizeMap[level] || sizeMap[1];
    const combinedClassName = `${weightClass} ${colorClass} ${sizeClass} ${className}`;

    switch (level) {
      case 1:
        return (
          <h1 className={combinedClassName} {...props}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={combinedClassName} {...props}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={combinedClassName} {...props}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={combinedClassName} {...props}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={combinedClassName} {...props}>
            {children}
          </h5>
        );
      case 6:
        return (
          <h6 className={combinedClassName} {...props}>
            {children}
          </h6>
        );
      default:
        return (
          <h1 className={combinedClassName} {...props}>
            {children}
          </h1>
        );
    }
  };

  const weightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colorMap = {
    default: "text-gray-900",
    light: "text-gray-600",
    primary: "text-blue-600",
  };

  const sizeMap = {
    1: "text-3xl md:text-4xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-lg md:text-xl",
    5: "text-base md:text-lg",
    6: "text-sm md:text-base",
  };

  return renderHeading();
};

export default Heading;
