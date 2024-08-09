import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server'
import { getLangDir } from 'rtl-detect';
import NavBar from "../components/navBar/fullNavBar";
import Footer from "../components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Me !",
  description: "Design Me ! ..... ",
};

export default async function RootLayout({ children, params }) {

  const messages = await getMessages();

  const locale = await getLocale();
  const direction = getLangDir(locale);


  return (
    <html lang={params.locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages} >

          <NavBar>
            {children}
          </NavBar>
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
