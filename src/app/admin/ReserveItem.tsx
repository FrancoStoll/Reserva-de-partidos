import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Order } from "@prisma/client";
import { IoIosFootball } from "react-icons/io";
interface Props {
  order: Order;
}

export const ReserveItem = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          {order.date.toISOString().split("T")[0]}
        </CardTitle>
        <IoIosFootball className="w-6 h-6 text-gray-500 dark:text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">{order.hour}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {order.clienteEmail}
        </p>
      </CardContent>
    </Card>
  );
};
