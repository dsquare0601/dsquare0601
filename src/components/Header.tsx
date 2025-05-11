import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function Header({ sectionTitle }: { sectionTitle: string }) {
  return (
    <header className="3xl:h-16 4xl:h-16 5xl:h-22 6xl:h-24 sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 sm:h-16 md:h-16 lg:h-12 xl:h-12 2xl:h-16">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="3xl:text-xl 4xl:text-xl 5xl:text-xl 6xl:text-3xl text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-sm">
                {sectionTitle}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
