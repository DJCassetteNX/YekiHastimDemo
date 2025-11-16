import Head from "next/head";
import Sponsors from "../components/Pages/Sponsors/Sponsors";

export default function SponsorsPage() {
  return (
    <>
      <Head>
        <title>حامیان ما - یکی هستیم</title>
        <meta
          name="description"
          content="با حامیان و پشتیبانان کانون توسعه گران جوان یکی هستیم آشنا شوید. افرادی که در مسیر امدادرسانی و توسعه پایدار همراه ما هستند."
        />
        <meta
          name="keywords"
          content="حامیان، پشتیبانان، اسپانسر، حمایت مالی، خیرین، یکی هستیم، کانون توسعه گران جوان"
        />
        <meta property="og:title" content="حامیان ما - یکی هستیم" />
        <meta
          property="og:description"
          content="با حامیان و پشتیبانان کانون توسعه گران جوان یکی هستیم آشنا شوید. افرادی که در مسیر امدادرسانی و توسعه پایدار همراه ما هستند."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/sponsors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="حامیان ما - یکی هستیم" />
        <meta
          name="twitter:description"
          content="با حامیان و پشتیبانان کانون توسعه گران جوان یکی هستیم آشنا شوید."
        />
        <link rel="canonical" href="https://yekihastim.ir/sponsors" />
      </Head>
      <Sponsors />
    </>
  );
}
