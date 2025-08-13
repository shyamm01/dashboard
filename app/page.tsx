import Dashboard from "@/components/Graphs";
import Sidebar from "@/components/Sidebar";
import TotalAdSpend from "@/components/TotalAdSpend";
import Topbar from "@/components/Topbar";
import TopCitiesCard from "@/components/TopCities";
import TopSellingSKU from "@/components/TopSellingSKU";
import TotalItemsSoldCard from "@/components/TotalItemsSoldCard";
import TotalSalesCard from "@/components/TotalSalesCard";
import TotalAdSpendFirst from "@/components/TotalAdSpendFirst";
import Image from "next/image";
import SalesTable from "@/components/TableData";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 bg-[#FAFAFA] mt-5 ml-[20px] mr-[20px] border border-[#EBEBEB] rounded-[10px]">
        <Topbar />

        <div className="flex flex-col gap-12 my-4 max-h-[78vh] overflow-auto">
          <div className="flex flex-col gap-6 px-5">
            <Dashboard />

            <div className="grid grid-cols-3 gap-3">
              <div className="col">
                <TopCitiesCard />
              </div>
              <div className="col">
                <TopSellingSKU />
              </div>
              <div className="col">
                <TotalAdSpendFirst />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col">
                <TotalSalesCard />
              </div>
              <div className="col">
                <TotalItemsSoldCard />
              </div>
              <div className="col">
                <TotalAdSpend />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 px-5">
            <div
              className="flex flex-col gap-6 rounded-xl bg-white"
              style={{ boxShadow: "0px 1px 0px 0px #0000001F" }}
            >
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-2xl"
                  style={{
                    background: "#FAFAFA",
                    border: "1px solid #027056",
                    boxShadow: "0px 0px 0px 4px #9EDDCD",
                  }}
                >
                  {/* Card Content */}
                  <div className="flex items-center justify-between px-5 py-3 ">
                    <div className="flex items-center gap-3">
                      <span className="">
                        <Image
                          src="/LogoMark.svg"
                          alt="logo-mark"
                          width={28}
                          height={28}
                          className="size-7"
                        />
                      </span>
                      <span className="text-[16px] font-semibold text-[#0CAA73] leading-6 -tracking-[0.26px]">
                        Recommendations
                      </span>
                    </div>
                    <button aria-label="Close" className="bg-transparent p-0">
                      <svg width={18} height={18} viewBox="0 0 18 18">
                        <path
                          d="M5 5 L13 13 M13 5 L5 13"
                          stroke="#1A1A1C"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="border-t border-[#F1F1F1] mx-5 mb-2.5" />
                  <div className="pb-3 px-5">
                    <span className="block font-semibold text-[16px] leading-4 text-[#0A090B] mb-1 -tracking-[0.26px] align-middle">
                      Low inventory detected in 12 dark stores
                    </span>
                    <span className="block text-[14px] font-normal leading-[100%] text-[#4F5F5B] -tracking-[0.26px] align-middle">
                      We have detected a DOI of less than 15 days in Golf Course
                      Rd, Sarjapur Rd, and 10 more areas. Replenish the
                      inventory to ensure no impact on..
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 rounded-xl"
              style={{ boxShadow: "0px 1px 0px 0px #0000001F" }}
            >
              <div className="flex justify-between ">
                <div className="flex gap-[393px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl leading-5 -tracking-[3%] font-bold align-middle text-[#031B15]">
                      Snapshot
                    </h3>
                    <p className="text-sm leading-[18px] -tracking-[0px] font-normal align-middle text-[#4F4D55]">
                      Your recent performance by day / week / month
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-[8px]"
                style={{ boxShadow: "0px 1px 0px 0px #0000001F" }}
              >
                <SalesTable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
