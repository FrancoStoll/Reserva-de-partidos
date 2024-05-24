import { CalendarPickerAdmin } from "@/components/admin/CalendarPickerAdmin";
import prisma from "@/lib/prisma";

export default async function CreatePage() {
  const orders = await prisma.order.findMany();

  return (
    <>
      <h2 className="scroll-m-20 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Crear una orden
      </h2>

      <CalendarPickerAdmin orders={orders} />
    </>
  );
}
