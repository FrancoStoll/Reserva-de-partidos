"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="mx-auto flex justify-center flex-col items-center">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Orden pagada correctamente
        </h1>
        <p className="text-xl text-muted-foreground">
          Puedes ver todas tus reservas haciendo click en el boton de abajo
        </p>
        <Button
          className="mt-2"
          onClick={() => router.push("/dashboard/reservas")}
        >
          Ver Reservas
        </Button>
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
