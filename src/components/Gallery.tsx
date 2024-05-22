/* eslint-disable @next/next/no-img-element */

import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Imagenes de nuestras canchas
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explora nuestra impresionante colección de imágenes y descubre el
            cuidado y la calidad que dedicamos a nuestras canchas en Fútbol 5
            Total. ¡Ven y disfruta de la pasión del fútbol en un entorno cuidado
            y de calidad!
          </p>
        </div>
        <div className="mt-12 overflow-auto [&::-webkit-scrollbar]:hidden [&]:scrollbar-thin [&]:scrollbar-thumb-gray-300 dark:[&]:scrollbar-thumb-gray-700">
          <div className="flex gap-4 [&_img]:shrink-0 [&_img]:max-w-xs">
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
            <img
              alt="Gallery Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
              width={600}
            />
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="Gallery Image"
                  className="aspect-video object-cover rounded-md"
                  height={600}
                  src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Gallery Image"
                  className="aspect-video object-cover rounded-md"
                  height={600}
                  src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Gallery Image"
                  className="aspect-video object-cover rounded-md"
                  height={600}
                  src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
                  width={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
