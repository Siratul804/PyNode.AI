import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/ui/app-sidebar";
import Header from "../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main>
          <div className=" p-4 w-auto">{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
}
