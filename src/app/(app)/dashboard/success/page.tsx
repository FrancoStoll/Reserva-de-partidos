'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessPage() {

  const router = useRouter()
  return (
    <div className="mx-auto flex justify-center flex-col items-center my-24">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Order paid correctly
        </h1>
        <p className="text-xl text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
        <Button className="mt-2" onClick={() => router.push('/')}>Back to top</Button>
      </div>

      <Image
        src="/imagensucces.jfif"
        width={700}
        height={700}
        alt="lgo"
        className="mt-10 rounded-md opacity-65"
        
      />
    </div>
  );
}
