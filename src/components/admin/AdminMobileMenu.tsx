"use client";
import { HomeIcon, MenuIcon, UsersIcon, LineChartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { IoIosAddCircleOutline, IoMdFootball } from "react-icons/io";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const AdminMobileMenu = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden rounded-md" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100/40 dark:bg-gray-800/40" side="left">
        <div className="flex flex-col gap-2 h-full max-h-screen">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <IoMdFootball className="h-6 w-6" />
              <span className="">Futbol 5 Total</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathName === "/admin" &&
                    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
                href="/admin"
              >
                <HomeIcon className="h-4 w-4" />
                Reservas del dia
              </Link>
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathName === "/admin/create" &&
                    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
                href="/admin/create"
              >
                <IoIosAddCircleOutline className="h-4 w-4" />
                Crear reserva
              </Link>
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathName === "/admin/users" &&
                    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
                href="/admin/users"
              >
                <UsersIcon className="h-4 w-4" />
                Users
              </Link>

              <Link
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathName === "/admin/analitics" &&
                    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
                href="/admin/analytics"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
