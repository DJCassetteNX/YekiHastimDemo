import Head from "next/head";
import SarpanahAmn from "../components/Pages/SarpanahAmn/SarpanahAmn";

export default function SarpanahAmnPage() {
  return (
    <>
      <Head>
        <title>پروژه سرپناه امن - یکی هستیم</title>
        <meta
          name="description"
          content="پروژه سرپناه امن کانون توسعه گران جوان یکی هستیم برای تأمین امنیت و رفاه خانواده‌های نیازمند در شهرستان جازموریان با ساخت فضاهای زندگی ایمن و پایدار."
        />
        <meta
          name="keywords"
          content="سرپناه امن، پروژه سرپناه، جازموریان، خانه سازی، امدادرسانی، یکی هستیم، سازه توپی"
        />
        <meta property="og:title" content="پروژه سرپناه امن - یکی هستیم" />
        <meta
          property="og:description"
          content="پروژه سرپناه امن برای تأمین امنیت و رفاه خانواده‌های نیازمند در شهرستان جازموریان با ساخت فضاهای زندگی ایمن و پایدار."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/sarpanahamn" />
        <meta
          property="og:image"
          content="https://yekihastim.ir/images/sarpanahamn/image1.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="پروژه سرپناه امن - یکی هستیم" />
        <meta
          name="twitter:description"
          content="پروژه سرپناه امن برای تأمین امنیت و رفاه خانواده‌های نیازمند در شهرستان جازموریان."
        />
        <meta
          name="twitter:image"
          content="https://yekihastim.ir/images/sarpanahamn/image1.jpg"
        />
        <link rel="canonical" href="https://yekihastim.ir/sarpanahamn" />
      </Head>
      <SarpanahAmn />
    </>
  );
}
