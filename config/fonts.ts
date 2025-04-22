import { Fira_Code as FontMono, Inter as FontSans, Inter, Lora, Poppins } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable name
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include needed weights
  variable: '--font-poppins',
});