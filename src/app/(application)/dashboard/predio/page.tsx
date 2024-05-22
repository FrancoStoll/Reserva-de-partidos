import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PredioPage() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12 md:py-16">
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 1</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 2</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 3</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 4</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 5</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            alt="Image 1"
            className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
            height={400}
            src="https://cdn.eldestapeweb.com/eldestape/092022/1664302470409/boca-bombonera-estadio-fifa-23-videojuego-jpg..webp?cw=770&ch=440&extw=jpg"
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Image 6</h3>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-8">
        <Button>View More</Button>
      </div>
    </>
  );
}
