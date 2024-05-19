import { CalendarPick } from "@/components/CalendarPick";
import { poppinsFont } from "@/config/fonts";
import { Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen text-center font-bold">
      <h2 className={`${poppinsFont.className} text-lg my-10`}>
        {/* Elige un dia para jugar y selecciona el horario y reserva la cancha */}
        Choose a day to play and select the time and reserve the field
      </h2>

      <CalendarPick />
    </div>
  );
}
