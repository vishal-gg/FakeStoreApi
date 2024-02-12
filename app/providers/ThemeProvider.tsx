"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider;