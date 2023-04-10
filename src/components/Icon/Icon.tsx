/*
* Copyright 2023 Dan Yael Sajarópulos Verdugo
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
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
  iconColor = "",
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