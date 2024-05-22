/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import UserComments from "@/components/UserComments";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 mx-auto max-w-7xl">
        <Link className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-sm font-medium">Fútbol 5 Total</span>
        </Link>
        <Link
          href="/dashboard"
          className={buttonVariants({ variant: "default" })}
        >
          Reservar
        </Link>
      </header>
      <section className="relative mb-5 mx-auto flex flex-col items-center justify-center gap-4 px-4 py-12 md:py-24 lg:py-32 md:min-h-[calc(100vh-21rem)]">
        {/* <img
          className="absolute -z-10 opacity-80 object-cover w-full h-full rounded-xl blur-0"
          src="/background.jpg"
          alt="background"
        /> */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Canchas de fútbol 5
        </h1>
        <p className="max-w-[700px] text-lg text-gray-500 dark:text-gray-400 md:text-xl">
          ¡Sumérgete en la emoción del fútbol en Fútbol 5 Total! Nuestra cancha
          te espera con emocionantes partidos de fútbol 5. Con instalaciones
          modernas y un ambiente acogedor, disfruta de momentos inolvidables con
          tus amigos y familiares. ¡Ven y vive la pasión del fútbol en Fútbol 5
          Total!
        </p>
        <Link
          href={"/dashboard"}
          className={cn("w-[200px]", buttonVariants({ variant: "default" }))}
        >
          Reservar
        </Link>
      </section>

      <Gallery />
      <div className="w-full md:w-[1000px] mx-auto px-5 md:px-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Es accesible?</AccordionTrigger>
            <AccordionContent>
              Sí. Además, nuestras instalaciones están diseñadas pensando en la
              accesibilidad para personas con discapacidad. También ofrecemos
              tarifas especiales para grupos que incluyan a personas con
              necesidades especiales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Tienen diferentes precios?</AccordionTrigger>
            <AccordionContent>
              Sí. Contamos con diferentes opciones de precios para adaptarnos a
              las necesidades de nuestros clientes. Además, ofrecemos descuentos
              especiales para reservas anticipadas y para clientes recurrentes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Dónde estamos ubicados?</AccordionTrigger>
            <AccordionContent>
              Nos encontramos convenientemente ubicados en el corazón de la
              ciudad, lo que facilita el acceso desde cualquier parte. Además,
              nuestras instalaciones están rodeadas de servicios y comodidades
              para que puedas disfrutar de una experiencia completa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Ofrecen servicios adicionales?</AccordionTrigger>
            <AccordionContent>
              Sí. Además de nuestras canchas de fútbol, ofrecemos servicios de
              catering para eventos, alquiler de equipamiento deportivo y
              organización de torneos. ¡Contáctanos para conocer más sobre
              nuestros servicios adicionales y paquetes especiales!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <UserComments />
      <Footer />
    </>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
