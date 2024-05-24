import prisma from "@/lib/prisma";
import { ReserveGrid } from "./ReserveGrid";


export const metadata = {
  title: 'Reservas Hoy - Futbol 5 Total',
  description: 'Reservas Hoy - Futbol 5 Total',
 };
export default async function AdminPage() {
  const today =
    new Date(Date.now()).toISOString().split("T")[0] + "T00:00:00.000Z";

  const orders = await prisma.order.findMany({
    orderBy: {
      hour: "desc",
    },
    where: {
      date: today,
    },
  });

  return (
    <>
      <ReserveGrid orders={orders} />
    </>

    // <>
    //   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium"></CardTitle>
    //         <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">$45,231.89</div>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           +20.1% from last month
    //         </p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
    //         <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+2350</div>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           +180.1% from last month
    //         </p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Sales</CardTitle>
    //         <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+12,234</div>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           +19% from last month
    //         </p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Active Now</CardTitle>
    //         <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+573</div>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           +201 since last hour
    //         </p>
    //       </CardContent>
    //     </Card>
    //   </div>
    //   <div>
    //     <Card>
    //       <Table>
    //         <TableHeader>
    //           <TableRow>
    //             <TableHead className="w-[100px]">Invoice</TableHead>
    //             <TableHead>Status</TableHead>
    //             <TableHead>Method</TableHead>
    //             <TableHead className="text-right">Amount</TableHead>
    //           </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //           <TableRow>
    //             <TableCell className="font-medium">INV001</TableCell>
    //             <TableCell>Paid</TableCell>
    //             <TableCell>$250.00</TableCell>
    //             <TableCell className="text-right">Credit Card</TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell className="font-medium">INV002</TableCell>
    //             <TableCell>Pending</TableCell>
    //             <TableCell>$150.00</TableCell>
    //             <TableCell className="text-right">PayPal</TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell className="font-medium">INV003</TableCell>
    //             <TableCell>Unpaid</TableCell>
    //             <TableCell>$350.00</TableCell>
    //             <TableCell className="text-right">Bank Transfer</TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell className="font-medium">INV004</TableCell>
    //             <TableCell>Paid</TableCell>
    //             <TableCell>$450.00</TableCell>
    //             <TableCell className="text-right">Credit Card</TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell className="font-medium">INV005</TableCell>
    //             <TableCell>Paid</TableCell>
    //             <TableCell>$550.00</TableCell>
    //             <TableCell className="text-right">PayPal</TableCell>
    //           </TableRow>
    //         </TableBody>
    //       </Table>
    //     </Card>
    //   </div>
  );
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
