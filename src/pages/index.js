import Head from "next/head";
import Home from "../components/Pages/Home/Home";
import { useState } from "react";
import ProcessingModal from "../components/ProcessingModal";
import Success from "../components/Hero/Success";
import Faild from "../components/Hero/Faild";
import LableCard from "../components/Hero/LableCard";
import Sabt from "../components/Hero/Sabt";

export default function HomePage() {
  const [showTestModal, setShowTestModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [showLableCardModal, setShowLableCardModal] = useState(false);
  const [showSabtModal, setShowSabtModal] = useState(false);

  return (
    <>
      <Head>
        <title>یکی هستیم - کانون توسعه گران جوان</title>
        <meta
          name="description"
          content="کانون توسعه گران جوان یکی هستیم، سازمانی تخصصی و مردم نهاد که از سال ۱۳۹۶ در حوزه امدادرسانی و توسعه پایدار فعالیت می‌کند."
        />
        <meta
          name="keywords"
          content="یکی هستیم، کانون توسعه گران جوان، امدادرسانی، توسعه پایدار، جازموریان، خیریه"
        />
        <meta property="og:title" content="یکی هستیم - کانون توسعه گران جوان" />
        <meta
          property="og:description"
          content="کانون توسعه گران جوان یکی هستیم، سازمانی تخصصی و مردم نهاد که از سال ۱۳۹۶ در حوزه امدادرسانی و توسعه پایدار فعالیت می‌کند."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="یکی هستیم - کانون توسعه گران جوان"
        />
        <meta
          name="twitter:description"
          content="کانون توسعه گران جوان یکی هستیم، سازمانی تخصصی و مردم نهاد که از سال ۱۳۹۶ در حوزه امدادرسانی و توسعه پایدار فعالیت می‌کند."
        />
        <link rel="canonical" href="https://yekihastim.ir" />
      </Head>
      <Home />
    </>
  );
}
