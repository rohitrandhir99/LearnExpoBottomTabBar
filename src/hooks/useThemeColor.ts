import { Colors } from "@/constants/colors/colors";
import { useColorScheme } from "react-native";

type Theme = keyof typeof Colors;

export const useThemeColor = () => {
  const theme = (useColorScheme() ?? "light") as Theme;

  return Colors[theme];
};
