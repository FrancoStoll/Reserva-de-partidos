/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3eRL1s5ES7h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function UserComments() {
  return (
    <div
      className="flex flex-col items-center py-12 md:py-20 w-full
      px-5 md:px-0
    "
    >
      <h2 className="text-3xl font-bold mb-8 md:text-4xl">
        What Our Users Say
      </h2>
      <div className="flex overflow-x-auto py-6 space-x-6 w-full max-w-7xl px-4 md:px-0 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div className="flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white dark:bg-primary rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Juan Pérez</h3>
                <p className="text-gray-500 dark:text-secondary">
                  Entusiasta del fútbol
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-secondary leading-relaxed">
              &quot;¡La cancha de fútbol en Fútbol 5 Total es simplemente
              increíble! La calidad del césped y las instalaciones son de
              primera categoría. Jugar en este ambiente ha mejorado enormemente
              nuestra experiencia futbolística. La comodidad y el ambiente
              acogedor hacen que cada partido sea aún más emocionante.
              ¡Definitivamente volveremos una y otra vez!&quot;
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white  dark:bg-primary rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="User 2" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">María García</h3>
                <p className="text-gray-500 dark:text-secondary">
                  Amante del deporte
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-secondary leading-relaxed">
              &quot;Jugar en la cancha de fútbol de Fútbol 5 Total es una
              experiencia incomparable. La atención al detalle en el
              mantenimiento del campo y las instalaciones es evidente desde el
              momento en que pisas la cancha. La pasión por el deporte se
              refleja en cada aspecto, desde la calidad del césped hasta el
              ambiente vibrante. ¡No puedo esperar para volver a jugar!&quot;
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white  dark:bg-primary rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="User 4" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Laura Pérez</h3>
                <p className="text-gray-500 dark:text-secondary">
                  Aficionada al deporte
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-secondary leading-relaxed">
              &quot;¡La cancha de fútbol en Fútbol 5 Total es simplemente
              excepcional! La infraestructura moderna y la atención al detalle
              hacen que cada juego sea una experiencia increíble. Además, el
              personal siempre está dispuesto a ayudar y crear un ambiente
              acogedor. Sin duda, es el lugar perfecto para disfrutar del fútbol
              con amigos y familiares. &quot;
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white  dark:bg-primary rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="User 3" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Carlos Martínez</h3>
                <p className="text-gray-500 dark:text-secondary">
                  Apasionado del fútbol
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-secondary leading-relaxed">
              &quot;¡La cancha de fútbol en Fútbol 5 Total es simplemente
              espectacular! La atmósfera emocionante y el ambiente amigable
              hacen que cada partido sea una experiencia única. La comodidad de
              las instalaciones y la calidad del césped contribuyen a un juego
              fluido y divertido. Sin duda, recomendaría Fútbol 5 Total a
              cualquier aficionado al fútbol. &quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
