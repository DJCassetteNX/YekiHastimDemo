import Head from "next/head";
import AnnualReport from "../components/Pages/AnnualReport/AnnualReport";

export default function AnnualReportPage() {
  return (
    <>
      <Head>
        <title>گزارش عملکرد سالانه ۱۴۰۳ - یکی هستیم</title>
        <meta
          name="description"
          content="گزارش عملکرد سالانه کانون توسعه‌گران جوان یکی هستیم در سال ۱۴۰۳ شامل دستاوردهای کلیدی، آمار پروژه‌ها، رویدادها و کمپین‌ها در شهرستان جازموریان."
        />
        <meta
          name="keywords"
          content="گزارش عملکرد، گزارش سالانه، ۱۴۰۳، یکی هستیم، جازموریان، سرپناه امن، دستاوردها، آمار"
        />
        <meta
          property="og:title"
          content="گزارش عملکرد سالانه ۱۴۰۳ - یکی هستیم"
        />
        <meta
          property="og:description"
          content="گزارش عملکرد سالانه کانون توسعه‌گران جوان یکی هستیم در سال ۱۴۰۳ شامل دستاوردهای کلیدی، آمار پروژه‌ها، رویدادها و کمپین‌ها در شهرستان جازموریان."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/annual-report" />
        <meta
          property="og:image"
          content="https://yekihastim.ir/images/annualreport/image1.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="گزارش عملکرد سالانه ۱۴۰۳ - یکی هستیم"
        />
        <meta
          name="twitter:description"
          content="گزارش عملکرد سالانه کانون توسعه‌گران جوان یکی هستیم در سال ۱۴۰۳."
        />
        <meta
          name="twitter:image"
          content="https://yekihastim.ir/images/annualreport/image1.jpg"
        />
        <link rel="canonical" href="https://yekihastim.ir/annual-report" />
      </Head>
      <AnnualReport />
    </>
  );
}
