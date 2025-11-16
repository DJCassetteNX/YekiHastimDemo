import Head from "next/head";
import Contact from "../components/Pages/ContactUs/Contact";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>ارتباط با ما - یکی هستیم</title>
        <meta
          name="description"
          content="ارتباط با کانون توسعه‌گران جوان یکی هستیم. آدرس، شماره تماس، ایمیل و فرم تماس برای ارتباط مستقیم با تیم ما. ما آماده پاسخگویی به سوالات و پیشنهادات شما هستیم."
        />
        <meta
          name="keywords"
          content="ارتباط با ما، تماس، آدرس، شماره تماس، ایمیل، یکی هستیم، کانون توسعه‌گران جوان"
        />
        <meta property="og:title" content="ارتباط با ما - یکی هستیم" />
        <meta
          property="og:description"
          content="ارتباط با کانون توسعه‌گران جوان یکی هستیم. آدرس، شماره تماس، ایمیل و فرم تماس برای ارتباط مستقیم با تیم ما."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/contact-us" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ارتباط با ما - یکی هستیم" />
        <meta
          name="twitter:description"
          content="ارتباط با کانون توسعه‌گران جوان یکی هستیم."
        />
        <link rel="canonical" href="https://yekihastim.ir/contact-us" />
      </Head>
      <Contact />
    </>
  );
}
