import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";




export const metadata : Metadata = {
 title: 'Ingresar - Futbol 5 Total',
 description: 'Ingresa en futbol 5 total y reserva tú cancha',
};


export default function NamePage() {
  return (
    <div className="">
      <LoginForm  />
    </div>
  );
}
