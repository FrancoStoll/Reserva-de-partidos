import { auth } from "@/auth";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/config/formatDate";
import { Order } from "@prisma/client";

interface Props {
  reserves: Order[];
}

export const ReserveTable = async ({ reserves }: Props) => {
  const session = await auth();

  return (
    <Table>
      <TableCaption>Aquí puedes ver todas tu reservas realizadas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Dia</TableHead>
          <TableHead>Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reserves.map((reserve) => (
          <TableRow key={reserve.id}>
            <TableCell className="font-medium">{reserve.id}</TableCell>
            <TableCell className="font-medium">{session?.user.name}</TableCell>
            <TableCell className="font-medium">
              {formatDate(reserve.date)}
            </TableCell>
            <TableCell className="font-medium">{reserve.hour}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
