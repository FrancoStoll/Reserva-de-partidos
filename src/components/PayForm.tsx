"use client";
import { createOrder } from "@/actions/actions";
import { useOrder } from "@/store/store";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { ToastAction } from "@radix-ui/react-toast";
import { toast } from "./ui/use-toast";
import { formatDate } from "../config/formatDate";
import { Button } from "./ui/button";

export const PayForm = () => {
  const router = useRouter();
  const date = useOrder((state) => state.date);
  const hour = useOrder((state) => state.selectedHour);
  const resetStore = useOrder((state) => state.resetStore);
  const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago

    const order = await createOrder(date!, hour!);
    if (!order.ok) {
      toast({
        title: "There was an error at the payment method",
        action: (
          <ToastAction altText="Goto schedule to undo">Cerrar</ToastAction>
        ),
        description: "Try later",
        variant: "destructive",
      });
    }

    toast({
      title: "Completed",
      description: order.message,
      action: <ToastAction altText="Goto schedule to undo">Cerrar</ToastAction>,
    });
    resetStore();
    router.push("/dashboard/success");
  };
  return (
    <form onSubmit={handlePayment}>
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Completar la reserva de la cancha
      </h2>
      <p className="text-sm text-muted-foreground">
        <strong>Para guardar</strong> es necesario realizar el pago
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Reserva para el dia {formatDate(date!)}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">At {hour}</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 flex justify-between">
        Precio <span>$4000 ARS</span>
      </p>
      <Button type="submit" className="w-full my-10">
        Pagar
      </Button>
    </form>
  );
};
