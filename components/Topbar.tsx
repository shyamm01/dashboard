import { Calendar, ChartLine } from "lucide-react";
import Image from "next/image";
import CustomToggle from "./CustomToggle";

export default function Topbar() {
  return (
    <div className="flex flex-col -ml-[0.49px] bg-white rounded-t-xl ">
      {/* Breadcrumb */}
      <div className="w-full flex justify-between items-center border-b border-[#EBEBEB] py-3 px-6 h-full">
        <div className="text-sm leading-[18px] font-medium -tracking-[3%] text-[#031B15]">
          <span className="font-medium">Quick Commerce &gt; </span>
          <span className="font-medium">All</span>
        </div>
        <div className="flex items-center gap-3 h-full">
          <button className="flex items-center gap-2 border border-[#D9D9D9] rounded-lg px-4 py-1.5 text-sm hover:bg-gray-50 h-[54px]">
            <ChartLine className="text-[#031B15] size-5" />
            <CustomToggle />
          </button>
          <button className="flex items-center gap-2 border border-[#D9D9D9] rounded-lg px-4 py-1.5 text-sm hover:bg-gray-50">
            <Calendar size={20} />
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm font-medium leading-[20px]">
                Aug 01, 2024 - Aug 03, 2024
              </p>
              <span className="text-[10px] font-medium leading-[20px] text-[#6A7380]">
                Vs Pick a date{" "}
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-b border-[#EBEBEB] py-3 px-6">
        <div className="flex items-center gap-4 w-fit p-1 border-[0.5px]  border-[#031B15]/10  rounded-xl">
          {/* All Tab */}
          <div className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#DFEAE8]">
            <span className="text-[#027056] font-medium text-sm leading-[20px] -tracking-[0.05px] text-center">
              All
            </span>
          </div>

          {/* Blinkit */}
          <div className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[10px]">
            <Image
              src="/BlinkitLogo.svg"
              alt="Blinkit"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-[#027056] font-medium text-sm leading-[20px] -tracking-[0.05px] text-center">
              Blinkit
            </span>
          </div>

          {/* Zepto */}
          <div className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[10px]">
            <Image
              src="/ZeptoLogo.svg"
              alt="Zepto"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-[#027056] font-medium text-sm leading-[20px] -tracking-[0.05px] text-center">
              Zepto
            </span>
          </div>

          {/* Instamart */}
          <div className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[10px]">
            <Image
              src="/InstamartLogo.svg"
              alt="Instamart"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-[#027056] font-medium text-sm leading-[20px] -tracking-[0.05px] text-center">
              Instamart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
