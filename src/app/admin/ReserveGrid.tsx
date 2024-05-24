import { Order } from "@prisma/client";
import { ReserveItem } from "./ReserveItem";

interface Props {
  orders: Order[];
}

export const ReserveGrid = ({ orders }: Props) => {
  return (
    <>
      <h2 className="scroll-m-20 text-center text-secondary-foreground pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Reservas del dia de la fecha {new Date(Date.now()).toISOString().split('T')[0]}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {orders?.map((order, index) => (
          <ReserveItem order={order} key={order.id} />
        ))}
      </div>
    </>
  );
};
