import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WhatsAppButton from "@/components/WhatsAppButton";
import prisma from "@/lib/prisma";


export const metadata = {
 title: 'Usuarios - Futbol 5 Total',
 description: 'Users - Futbol 5 Total',
};

export default async function UsersPage() {
  const users = await prisma.user.findMany();
  return (
    <Table>
      <TableCaption>
        Lista de usuarios registrados en Fútbol 5 Total
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Telefono</TableHead>
          <TableHead>Enviar Mensaje</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">#{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.telefono}</TableCell>
            <TableCell>
              <WhatsAppButton phoneNumber={user.telefono}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
