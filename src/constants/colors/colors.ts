const tintColorLight = "#007AFF"
const tintColorDark = "#0A84FF"

export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFFFFF",
    primary: "#007AFF",
    secondary: "#5856D6",
    card: "#F2F2F7",
    border: "#D1D1D6",
    tabIconDefault: "#8E8E93",
    tabIconSelected: tintColorLight,
  },

  dark: {
    text: "#ECEDEE",
    background: "#101010",
    primary: "#0A84FF",
    secondary: "#5E5CE6",
    card: "#1C1C1E",
    border: "#38383A",
    tabIconDefault: "#8E8E93",
    tabIconSelected: tintColorDark,
  },
} as const;
