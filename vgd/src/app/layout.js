import "./globals.css";
import React from "react";

export const metadata = {
  title: "Van Gogh Experience",
  description:
    "Van Gogh Experience, in honor of one of the greatest painters of all time ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
