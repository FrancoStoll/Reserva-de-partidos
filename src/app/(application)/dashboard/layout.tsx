import { auth, signOut } from "@/auth";
import { Button } from "../../../components/ui/button";
import { LogOutIcon } from "lucide-react";
import { MobileMenu } from "@/components/mobileMenu";
import { DesktopMenu } from "@/components/DesktopMenu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-5 px-4">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Fútbol 5
        </h2>

        <DesktopMenu />
        {session?.user && (
          <div className="flex gap-4 items-center">
            <MobileMenu />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-primary 0 p-3 text-sm font-medium hover:bg-secondary hover:text-primary  md:flex-none md:justify-start md:p-2 md:px-3">
                <LogOutIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </Button>
            </form>
          </div>
        )}
      </nav>

      {children}
    </main>
  );
}
