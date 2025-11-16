// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null; // هیچ چیز رندر نمی‌کنه، فقط وظیفه‌اش مدیریت اسکروله
}
