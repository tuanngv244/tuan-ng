import localFont from "next/font/local";

export const helveticaRoman = localFont({
  src: [
    {
      path: "./HelveticaNeueCyr-Roman.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-default",
});

export const helveticaLight = localFont({
  src: [
    {
      path: "./HelveticaNeueCyr-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-light",
});
