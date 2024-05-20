"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { authenticate } from "@/actions/auth/actions";
import { AlertCircleIcon, LogInIcon } from "lucide-react";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="max-w-xl mx-auto my-24 flex flex-col gap-2.5 p-5"
    >
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
        {errorMessage && (
          <>
            <AlertCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="mt-4 w-full" aria-disabled={pending}>
      Log in <LogInIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
