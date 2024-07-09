"use client"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return <div>잘못된 주소 입니다</div>;
}
