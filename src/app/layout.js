import localFont from "next/font/local";
import "./styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Shawarma Empire',
  description: 'Discover authentic shawarma and Middle Eastern delights at Shawarma Empire. Fresh ingredients, traditional recipes, and a warm atmosphere in Toronto.',
  keywords: 'shawarma, beef shawarma, chicken shawarma, Middle Eastern food, restaurant, food, Toronto, halal, falafel, hummus',
  openGraph: {
    title: 'Shawarma Empire',
    description: 'Experience the best authentic shawarma and Middle Eastern cuisine in Toronto.',
    type: 'website',
    locale: 'en_US',
    // url: 'https://www.shawarmaempire.com', // Replace with your actual URL
    siteName: 'Shawarma Empire',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // alternates: {
  //   canonical: 'https://www.shawarmaempire.com', // Replace with your actual URL
  // },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}