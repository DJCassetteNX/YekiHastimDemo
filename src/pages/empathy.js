import Head from "next/head";
import Empathy from "../components/Pages/Empathy/Empathy/Empathy";

export default function EmpathyPage() {
  return (
    <>
      <Head>
        <title>استند تسلیت - یکی هستیم</title>
        <meta
          name="description"
          content="استندهای تسلیت و تبریک کانون توسعه‌گران جوان یکی هستیم. مرهمی مشترک برای خانواده‌هایی که در سوگ هستند و نیاز به همدلی دارند. سفارش استند تسلیت با قیمت مناسب."
        />
        <meta
          name="keywords"
          content="استند تسلیت، استند تبریک، همدلی، سوگ، تسلیت، تبریک، یکی هستیم، مرهم مشترک"
        />
        <meta property="og:title" content="استند تسلیت - یکی هستیم" />
        <meta
          property="og:description"
          content="استندهای تسلیت و تبریک کانون توسعه‌گران جوان یکی هستیم. مرهمی مشترک برای خانواده‌هایی که در سوگ هستند و نیاز به همدلی دارند."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/empathy" />
        <meta
          property="og:image"
          content="https://yekihastim.ir/images/symbol-empathy/01-stands.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="استند تسلیت - یکی هستیم" />
        <meta
          name="twitter:description"
          content="استندهای تسلیت و تبریک کانون توسعه‌گران جوان یکی هستیم."
        />
        <meta
          name="twitter:image"
          content="https://yekihastim.ir/images/symbol-empathy/01-stands.jpg"
        />
        <link rel="canonical" href="https://yekihastim.ir/empathy" />
      </Head>
      <Empathy />
    </>
  );
}
