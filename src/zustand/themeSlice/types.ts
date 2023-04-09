
export type Theme = "nord";

export interface ThemeState{
  currentTheme: Theme,
  changeTheme: (theme: Theme) => void,
}