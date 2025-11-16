import Head from "next/head";
import { useRouter } from "next/router";
import StandDetail from "../../components/Pages/Empathy/Empathy/Stands/StandDetail";

export default function StandDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>جزئیات استند تسلیت {id} - یکی هستیم</title>
        <meta
          name="description"
          content={`جزئیات کامل استند تسلیت شماره ${id} کانون توسعه‌گران جوان یکی هستیم شامل قیمت، ابعاد، روند سفارش و شرایط نمایش.`}
        />
        <meta
          name="keywords"
          content="استند تسلیت، جزئیات استند، سفارش استند، یکی هستیم، تسلیت، تبریک"
        />
        <meta
          property="og:title"
          content={`جزئیات استند تسلیت ${id} - یکی هستیم`}
        />
        <meta
          property="og:description"
          content={`جزئیات کامل استند تسلیت شماره ${id} کانون توسعه‌گران جوان یکی هستیم.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yekihastim.ir/empathy/${id}`}
        />
        <link rel="canonical" href={`https://yekihastim.ir/empathy/${id}`} />
      </Head>
      <StandDetail id={id} />
    </>
  );
}
