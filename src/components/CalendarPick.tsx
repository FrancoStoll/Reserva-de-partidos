"use client";

import { FormEvent, useState } from "react";
import { Calendar } from "./ui/calendar";
import { formatDate } from "@/config/formatDate";
import { schedules } from "@/data/schedules";
import { Button } from "./ui/button";
import { meses } from "@/data/meses";
import { createOrder } from "@/actions/actions";
import { ToastAction } from "@radix-ui/react-toast";
import { toast } from "./ui/use-toast";

export const CalendarPick = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const order = await createOrder(date!, selectedTime!);

    if (!order.ok) {
      toast({
        title: "Error",
        description: order.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Cerrar</ToastAction>
        ),
        variant: "destructive",
      });
    }
    toast({
      title: "Completed",
      description: order.message,
      action: <ToastAction altText="Goto schedule to undo">Cerrar</ToastAction>,
    });
  };

  return (
    <>
      <p className="text-2xl font-extrabold tracking-tight my-5 bg-primary rounded-md py-2">
        Reservar para el dia {date?.getDate()} de {meses[date?.getMonth()!]}
      </p>
      <div className="flex justify-center gap-10">
        <div>
          <p className="mb-10">Select day</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div>
          <p className="mb-10">Select time</p>
          <form
            className="w-80 h-80 flex flex-col gap-11"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-2">
              {schedules.map((time, index) => (
                <span
                  key={index}
                  className={`${
                    selectedTime === time &&
                    "bg-primary text-primary-foreground"
                  } text-sm border rounded-xl py-2 px-1 cursor-pointer `}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </span>
              ))}
            </div>
            <Button type="submit">Reserve</Button>
          </form>
        </div>
      </div>
    </>
  );
};
