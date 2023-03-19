import React from "react";

export type IconStyle = "filled" | "outlined" | "round" | "sharp" | "two-tone"

export interface IconProperties {
  iconName?: string,
  iconStyle?: IconStyle,
  iconColor?: string,
  isDisabled?: boolean,
  disableOpacity?: number,
}

let classSuffix: {[key in IconStyle]: string} = {
  "filled": "",
  "outlined":"-outlined",
  "round":"-round",
  "sharp":"-sharp",
  "two-tone":"-two-tone",
}

export type IconProps = IconProperties & React.HTMLAttributes<HTMLSpanElement>;

const materialClassName = "material-icons";

export function Icon({
  iconName,
  iconStyle = "filled",
  className = "",
  iconColor = "#000000",
  isDisabled = false,
  disableOpacity = 0.5,
  ...props
} : IconProps){

  const iconClassName = `${materialClassName}${classSuffix[iconStyle]} ${className}`;

  const propStyles: React.CSSProperties = {
    color: iconColor,
    opacity: isDisabled ? disableOpacity : 1,
    ...props.style
  }

  return(
    <span className={iconClassName} style={propStyles} {...props}>
      {iconName}
    </span>
  )
}