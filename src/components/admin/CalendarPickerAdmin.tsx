"use client";

import { FormEvent, useState } from "react";

import { meses } from "@/data/meses";
import { useRouter } from "next/navigation";
import { useOrder } from "@/store/store";
import { OrderProps } from "@/types/types";
import { ToastAction } from "@radix-ui/react-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { HourTabs } from "@/components/HourTabs";
import { toast } from "@/components/ui/use-toast";
import { createOrderByAdmin } from "@/actions/actions";

export const CalendarPickerAdmin = ({ orders }: OrderProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !selectedTime) {
      return toast({
        variant: "destructive",
        title: "Creado corrctamente",
        description: "Debes Seleccionar un dia y una hora para poder reservar",
        action: <ToastAction altText="Try again"></ToastAction>,
        duration: 2500,
      });
    }

    const create = await createOrderByAdmin(date, selectedTime);

    if (create.ok) {
      return toast({
        variant: "default",
        title: "Seleccionar dia y hora",
        description: "Reserva creada correctamente",
        action: <ToastAction altText="Creado correctamente"></ToastAction>,
        duration: 2500,
      });
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center font-extrabold tracking-tight my-5 bg-primary rounded-md py-2">
        Reservar para el dia {date?.getDate()} de {meses[date?.getMonth()!]}
      </p>
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto space-x-48">
        <div className="grid place-items-center">
          <p className="mb-10">Selecctionar día</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md grid place-items-center"
          />
        </div>
        <div className="grid place-items-center">
          <p className="mb-10">Seleccionar hora</p>
          <form
            className="w-80 h-80 flex flex-col gap-11"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-2 text-center">
              <HourTabs
                orders={orders}
                selectedTime={selectedTime!}
                date={date!}
                setSelectedTime={setSelectedTime}
              />
            </div>
            <Button type="submit">Reserve</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
