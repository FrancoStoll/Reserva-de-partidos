"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Hello World</h1>
      <Button onClick={() => router.push("/dashboard")}>Go to dashboard</Button>
    </main>
  );
}
