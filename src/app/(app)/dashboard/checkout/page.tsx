import { PayForm } from "@/components/PayForm";
export default function CheckoutPage() {
  return (
    <div className="flex justify-center flex-col items-center w-96 mx-auto">
      <p className="my-24 tscroll-m-20 border-b pb-2 text-2xl font-semibold uppercase">
        Confirmación de la cancha
      </p>

      <PayForm />
    </div>
  );
}
