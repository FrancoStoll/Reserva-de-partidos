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
  console.log(new Date().getDay());
  if (date.getDay().toString() < new Date().getDay().toString())
    return (
      <p className="text-center w-72 h-56 flex items-center">
        No se puede seleccionar días anteriores
      </p>
    );

  return (
    <>
      {schedules.map((time, index) => {
        const isDisabled = orders.some((order) => {
          const currentDateISO = date?.toISOString().split("T")[0];
          const orderDateIso = order.date.toISOString().split("T")[0];

          return currentDateISO === orderDateIso && order.hour === time;
        });

        return (
          <span
            key={index}
            className={`${
              selectedTime === time && "bg-primary text-primary-foreground"
            } text-sm border rounded-xl py-2 px-1 cursor-pointer ${
              isDisabled && "bg-destructive text-gray-500 cursor-not-allowed"
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