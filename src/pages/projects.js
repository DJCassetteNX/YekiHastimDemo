import Head from "next/head";
import Projects from "../components/Pages/Projects/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>پروژه‌های ما - یکی هستیم</title>
        <meta
          name="description"
          content="مجموعه‌ای از پروژه‌های موفق کانون توسعه گران جوان یکی هستیم شامل پروژه‌های امدادرسانی، ساخت مدارس، تجهیز مراکز درمانی و کمک‌های بشردوستانه در جنوب شرق کرمان."
        />
        <meta
          name="keywords"
          content="پروژه‌های خیریه، امدادرسانی، ساخت مدرسه، تجهیز بیمارستان، کمک به محرومان، جازموریان، کرمان، یکی هستیم، پروژه‌های موفق"
        />
        <meta property="og:title" content="پروژه‌های ما - یکی هستیم" />
        <meta
          property="og:description"
          content="مجموعه‌ای از پروژه‌های موفق کانون توسعه گران جوان یکی هستیم شامل پروژه‌های امدادرسانی، ساخت مدارس، تجهیز مراکز درمانی و کمک‌های بشردوستانه در جنوب شرق کرمان."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yekihastim.ir/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="پروژه‌های ما - یکی هستیم" />
        <meta
          name="twitter:description"
          content="مجموعه‌ای از پروژه‌های موفق کانون توسعه گران جوان یکی هستیم در حوزه امدادرسانی و توسعه پایدار."
        />
        <link rel="canonical" href="https://yekihastim.ir/projects" />
      </Head>
      <Projects />
    </>
  );
}
