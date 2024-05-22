"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const pathName = usePathname();

  return (
    <div className="block md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="grid gap-4">
            <h3 className="scroll-m-20 text-2xl border-b font-semibold tracking-tight">
              Menu
            </h3>
            <div className="grid gap-2">
              <ul className="items-center gap-2 md:hidden cursor-pointer space-y-3">
                <li
                  className={`${
                    pathName === "/dashboard" && "border-b text-primary border-primary"
                  } "leading-7"`}
                >
                  <Link href="/dashboard">Seleccionar</Link>
                </li>
                <li
                  className={`${
                    pathName === "/dashboard/reservas" && "border-b text-primary border-primary"
                  } "leading-7"`}
                >
                  <Link href="/dashboard/reservas">Ver Reservas</Link>
                </li>
                <li
                  className={`${
                    pathName === "/dashboard/predio" && "border-b text-primary border-primary"
                  } "leading-7"`}
                >
                  <Link href="/dashboard/predio">Imagenes del predio</Link>
                </li>
              </ul>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
