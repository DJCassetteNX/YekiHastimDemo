import Head from "next/head";
import AboutUs from "../components/Pages/AboutUs/AboutUs";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>درباره ما - یکی هستیم</title>
        <meta
          name="description"
          content="آشنایی با کانون توسعه گران جوان یکی هستیم، اعضای تیم، چشم‌انداز و ماموریت ما در حوزه امدادرسانی و توسعه پایدار."
        />
        <meta
          name="keywords"
          content="درباره ما، اعضای تیم، چشم‌انداز، ماموریت، یکی هستیم، کانون توسعه گران جوان"
        />
        <meta property="og:title" content="درباره ما - یکی هستیم" />
        <meta
          property="og:description"
          content="آشنایی با کانون توسعه گران جوان یکی هستیم، اعضای تیم، چشم‌انداز و ماموریت ما در حوزه امدادرسانی و توسعه پایدار."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/aboutus" />
        <link rel="canonical" href="https://yekihastim.ir/aboutus" />
      </Head>
      <AboutUs />
    </>
  );
}
