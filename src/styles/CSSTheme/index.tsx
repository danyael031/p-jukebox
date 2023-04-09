import React, { ReactNode } from "react"
import { useAppStore } from "../../zustand"
import "../theme.css"


type CSSThemeProps = {
  children?: ReactNode
}

export function CSSTheme({ children }: CSSThemeProps){
  const { currentTheme } = useAppStore();
  return (
    <div data-theme={currentTheme} className="themeRoot">
      {children}
    </div>
  )
}