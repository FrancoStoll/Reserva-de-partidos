"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import image from "/public/background.jpg";
export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="mx-auto flex justify-center flex-col items-center px-4 md:px-0">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Orden pagada correctamente
      </h1>
      <p className="text-xl text-muted-foreground mt-4">
        Puedes ver todas tus reservas haciendo click en el boton de abajo
      </p>
      <Button
        className="mt-4"
        onClick={() => router.push("/dashboard/reservas")}
      >
        Ver Reservas
      </Button>

      <Image
        src={image}
        width={850}
        height={850}
        alt="lgo"
        className="mt-10 rounded-md opacity-65"
      />
    </div>
  );
}
