import "./globals.css";
import { PPMori, NanumSquareRound } from "./fonts";

export const metadata = {
  title: "CHO A RA",
  description: "CHO A RA PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PPMori.variable} ${NanumSquareRound.variable}`}>
        {children}
      </body>
    </html>
  );
}
