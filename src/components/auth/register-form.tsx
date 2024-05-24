"use client";
import { createUser } from "@/actions/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircleIcon, LogInIcon, ThumbsUp } from "lucide-react";
import { useFormStatus, useFormState } from "react-dom";
import Link from 'next/link';

const initialState = "";

export const RegisterForm = () => {
  const [message, dispatch] = useFormState(createUser, initialState);

  return (
    <form
      action={dispatch}
      className="max-w-xl mx-auto flex flex-col py-20 gap-2.5 p-5 justify-center min-h-screen"
    >
      <div className="grid gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Ingresa para poder reservar
        </h4>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          placeholder="jhondoe@correo.com"
          required
          type="text"
        />
        <Label htmlFor="name">Nombre</Label>
        <Input
          name="name"
          id="name"
          placeholder="Cosme Fulanito"
          required
          type="text"
        />
        <Label htmlFor="phoneNumber">Telefono</Label>
        <Input
          name="phoneNumber"
          id="phoneNumber"
          placeholder="3454473489"
          required
          type="tel"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          placeholder="**************"
          required
          type="password"
        />
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >                                                   
          {message.startsWith("Error") && (
            <>
              <AlertCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{message}</p>
            </>
          )}
        </div>
        <Link href="/auth/login" className="text-sm text-muted-foreground underline">
          ¿Ya tienes una cuenta? Ingresa aquí.
        </Link>
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="mt-4 w-full"
      aria-disabled={pending}
    >
      Log in <LogInIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
