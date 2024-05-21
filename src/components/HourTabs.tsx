"use client";
import { MAX_ORDER_FOR_HOUR } from "@/config/constants";
import { schedules } from "@/data/schedules";
import { Order } from "@prisma/client";

interface Props {
  orders: Order[];
  selectedTime: string;
  date: Date;
  setSelectedTime: (time: string) => void;
}

export const HourTabs = ({
  orders,
  selectedTime,
  date,
  setSelectedTime,
}: Props) => {
  // Aplico esta funcion para que no me tome el dia actual como deshabilitado
  let nowDate = new Date();
  nowDate.setDate(nowDate.getDate() - 1);

  if (date < nowDate)
    return (
      <p className="text-center w-72 h-56 flex items-center">
        No se puede seleccionar días anteriores
      </p>
    );

  return (
    <>
      {schedules.map((time, index) => {
        const ordersForTime = orders.filter(
          (order) =>
            order.date.toISOString().split("T")[0] ===
              date.toISOString().split("T")[0] && order.hour === time
        );

        const isDisabled = ordersForTime.length >= MAX_ORDER_FOR_HOUR; // ej;2 ;

        return (
          <span
            key={index}
            className={`${
              selectedTime === time && "bg-primary text-primary-foreground"
            } text-sm border rounded-xl py-2 px-1 cursor-pointer ${
              isDisabled && "bg-destructive text-gray-400 cursor-not-allowed"
            }`}
            onClick={() => (isDisabled ? null : setSelectedTime(time))}
          >
            {time}
          </span>
        );
      })}
    </>
  );
};
