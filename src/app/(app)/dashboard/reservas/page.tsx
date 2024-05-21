import { searchOrder } from "@/actions/actions";
import { ReserveTable } from "@/components/ReserveTable";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function ReservasPage() {
  const reserves = await searchOrder();
  return (
    <>
      <p className="text-center scroll-m-20 border-b pb-2 text-2xl font-semibold">
        Reserva/s
      </p>

      {reserves.reserves.length === 0 ? (
        <>
          <h2 className="scroll-m-20 mt-10  pb-2 text-center text-3xl font-semibold tracking-tight">
            No has reservado ninguna cancha todavia
          </h2>
          <Link
            className={cn(
              "w-full mt-2",
              buttonVariants({ variant: "default" })
            )}
            href={"/dashboard"}
          >
            Seleccionar
          </Link>
        </>
      ) : (
        <ReserveTable reserves={reserves.reserves!} />
      )}
    </>
  );
}
