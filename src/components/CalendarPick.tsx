"use client";

import { FormEvent, useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { meses } from "@/data/meses";
import { useRouter } from "next/navigation";
import { useOrder } from "@/store/store";
import { OrderProps } from "@/types/types";
import { HourTabs } from "./HourTabs";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export const CalendarPick = ({ orders }: OrderProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();
  const setDateHourStore = useOrder((state) => state.setDateHourStore);

  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !selectedTime) {
      return toast({
        variant: "destructive",
        title: "Seleccionar dia y hora",
        description: "Debes Seleccionar un dia y una hora para poder reservar",
        action: <ToastAction altText="Try again"></ToastAction>,
        duration: 2500,
      });
    }

    setDateHourStore(date!, selectedTime!);
    router.push("dashboard/checkout");
  };
  return (
    <>
      <p className="text-2xl font-extrabold tracking-tight my-5 bg-primary rounded-md py-2">
        Reservar para el dia {date?.getDate()} de {meses[date?.getMonth()!]}
      </p>
      <div className="grid md:grid-cols-2">
        <div>
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
            <div className="grid grid-cols-2 gap-2">
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
    </>
  );
};
