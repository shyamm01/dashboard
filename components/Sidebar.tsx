import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import BrandSelector from "./BrandSelector";
import { Navbar } from "./Navbar";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen flex flex-col">
      <div className="flex items-center gap-4 py-5 pl-[5px] pr-[13.5px]">
        <Image src="/HeaderNavBarLogo.svg" alt="Logo" width={40} height={40} />
        <BrandSelector />
        <ChevronsLeft className="h-[16.625px] w-[16.625px]" />
      </div>

      <Navbar />
    </aside>
  );
}
