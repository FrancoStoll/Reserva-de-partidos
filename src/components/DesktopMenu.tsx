"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopMenu = () => {
  const pathName = usePathname();

  return (
    <ul className="hidden items-center gap-2 md:flex cursor-pointer">
      <li className={`${pathName === "/dashboard" && "border-b text-primary border-primary"} "leading-7"`}>
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
  );
};
