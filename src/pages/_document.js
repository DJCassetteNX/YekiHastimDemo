import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00aeef" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="author" content="یکی هستیم - کانون توسعه گران جوان" />
        <meta name="generator" content="Next.js" />
        <meta name="author" content="DJCassetteNX" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
