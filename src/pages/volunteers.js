import Head from "next/head";
import Volunteers from "../components/Pages/Volunteers/Volunteers";

export default function VolunteersPage() {
  return (
    <>
      <Head>
        <title>داوطلبین - یکی هستیم</title>
        <meta
          name="description"
          content="به جمع داوطلبین کانون توسعه گران جوان یکی هستیم بپیوندید. با ثبت‌نام به‌عنوان داوطلب در پروژه‌های امدادرسانی و توسعه پایدار، بخشی از مسیر همدلی و ساختن آینده‌ای بهتر باشید."
        />
        <meta
          name="keywords"
          content="داوطلبین، داوطلب، همکاری، امدادرسانی، توسعه پایدار، یکی هستیم، مشارکت اجتماعی"
        />
        <meta property="og:title" content="داوطلبین - یکی هستیم" />
        <meta
          property="og:description"
          content="به جمع داوطلبین کانون توسعه گران جوان یکی هستیم بپیوندید. با ثبت‌نام به‌عنوان داوطلب در پروژه‌های امدادرسانی و توسعه پایدار، بخشی از مسیر همدلی و ساختن آینده‌ای بهتر باشید."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/volunteers" />
        <meta
          property="og:image"
          content="https://yekihastim.ir/images/annualreport/invite.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="داوطلبین - یکی هستیم" />
        <meta
          name="twitter:description"
          content="به جمع داوطلبین کانون توسعه گران جوان یکی هستیم بپیوندید."
        />
        <meta
          name="twitter:image"
          content="https://yekihastim.ir/images/annualreport/invite.svg"
        />
        <link rel="canonical" href="https://yekihastim.ir/volunteers" />
      </Head>
      <Volunteers />
    </>
  );
}
