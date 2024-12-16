import { Outfit } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import data from "./data/data.json";

import InstagramSVG from "./images/icons/instagram.svg";
import FacebookSVG from "./images/icons/facebook.svg";
import WhatsappSVG from "./images/icons/whatsapp.svg";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { companyName, navLinks, socialLinks: social } = data;

  const socialLinks = [
    {
      url: social.instagram,
      Component: InstagramSVG,
    },
    {
      url: social.facebook,
      Component: FacebookSVG,
    },
    {
      url: social.whatsapp,
      Component: WhatsappSVG,
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-base-100 text-base-content relative`}
      >
        <Header companyName={companyName} navLinks={navLinks} />
        <main className="mt-36">{children}</main>
        <Footer navLinks={navLinks} socialLinks={socialLinks} />
      </body>
    </html>
  );
}
