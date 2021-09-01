import React from 'react';
import { ThemeProvider } from 'styled-components';

const jokesTheme = {
  fontColor: "#363A43",
  backgroundColor: "#F6F9FC",
  titleSize: "24px",
  subtitleSize: "18px",
  bodySize: "14px",
};

export function ThemeComponent({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ThemeProvider theme={jokesTheme}>
      {children}
    </ThemeProvider>
  );
}
