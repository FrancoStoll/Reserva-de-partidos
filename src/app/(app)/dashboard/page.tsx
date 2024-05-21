import { CalendarPick } from "@/components/CalendarPick";
import { poppinsFont } from "@/config/fonts";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const orders = await prisma.order.findMany();

  return (
    <div className="min-h-screen text-center font-bold">
      <h2 className={`${poppinsFont.className} text-lg my-10`}>
        Elige un dia para jugar y selecciona el horario y reserva la cancha
      </h2>

      <CalendarPick orders={orders} />
    </div>
  );
}
