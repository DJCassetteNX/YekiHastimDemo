import Head from "next/head";
import { useRouter } from "next/router";
import ProjectDetails from "../../components/Pages/Projects/ProjectDetails";

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>جزئیات پروژه - یکی هستیم</title>
        <meta
          name="description"
          content="جزئیات کامل پروژه کانون توسعه گران جوان یکی هستیم"
        />
        <meta name="keywords" content="جزئیات پروژه، یکی هستیم، امدادرسانی" />
        <meta property="og:title" content="جزئیات پروژه - یکی هستیم" />
        <meta
          property="og:description"
          content="جزئیات کامل پروژه کانون توسعه گران جوان یکی هستیم"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yekihastim.ir/projects/${id}`}
        />
        <link rel="canonical" href={`https://yekihastim.ir/projects/${id}`} />
      </Head>
      <ProjectDetails projectId={id} />
    </>
  );
}
