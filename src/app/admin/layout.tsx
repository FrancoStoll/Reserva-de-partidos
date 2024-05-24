/* eslint-disable @next/next/no-img-element */

import { SideMenu } from "@/components/admin/SideMenu";
import { AdminMobileMenu } from "@/components/admin/AdminMobileMenu";
import { Search } from "@/components/admin/Search";
import { DropMenuUser } from "@/components/admin/DropMenuUser";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <SideMenu />

      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <AdminMobileMenu />
          <Search />
          <DropMenuUser />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
