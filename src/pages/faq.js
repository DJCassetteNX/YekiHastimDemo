import Head from "next/head";
import Faq from "../components/Pages/Faq/Faq";

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>سوالات متداول - یکی هستیم</title>
        <meta
          name="description"
          content="سوالات متداول کانون توسعه‌گران جوان یکی هستیم. پاسخ به سوالات رایج درباره پروژه‌ها، فعالیت‌ها، نحوه مشارکت و همکاری با سازمان."
        />
        <meta
          name="keywords"
          content="سوالات متداول، FAQ، یکی هستیم، پروژه‌ها، مشارکت، همکاری، امدادرسانی، توسعه پایدار"
        />
        <meta property="og:title" content="سوالات متداول - یکی هستیم" />
        <meta
          property="og:description"
          content="سوالات متداول کانون توسعه‌گران جوان یکی هستیم. پاسخ به سوالات رایج درباره پروژه‌ها، فعالیت‌ها، نحوه مشارکت و همکاری با سازمان."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/faq" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="سوالات متداول - یکی هستیم" />
        <meta
          name="twitter:description"
          content="سوالات متداول کانون توسعه‌گران جوان یکی هستیم."
        />
        <link rel="canonical" href="https://yekihastim.ir/faq" />
      </Head>
      <Faq />
    </>
  );
}
