"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";

const sellers = [
  {
    name: "Zepto",
    logo: "/ZeptoLogo.svg", // Replace with your actual SVG icon path
    value: 2343,
    percent: "1.9%",
    percentColor: "#EF4444",
    isUp: false,
    barColor: "#7C3AED",
    barWidth: "70%", // Example width
  },
  {
    name: "Instamart",
    logo: "/InstamartLogo.svg", // Replace with your actual SVG icon path
    value: 1009,
    percent: "2.8%",
    percentColor: "#0CAA73",
    isUp: true,
    barColor: "#EF4444",
    barWidth: "32%", // Example width
  },
  {
    name: "Blinkit",
    logo: "/BlinkitLogo.svg", // Replace with your actual SVG icon path
    value: 3421,
    percent: "3.2%",
    percentColor: "#EF4444",
    isUp: false,
    barColor: "#FBBF24",
    barWidth: "85%", // Example width
  },
];

export default function TotalItemsSoldCard() {
  return (
    <section className="flex flex-col rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1px_0px_0px_#0000001F] h-full relative font-inter">
      {/* Card Header */}
      <div className="flex items-center justify-between p-2 border border-[#F1F1F1] rounded-t-xl">
        <span className="text-[14px] font-semibold leading-5 text-[#515153] -tracking-[0.26px] text-center">
          Total items sold
        </span>
        <div className="flex justify-between items-center gap-4">
          <div className="relative group flex items-center">
            <Image
              src="/LogoMark.svg"
              alt="logo-mark"
              width={28}
              height={28}
              className="size-7 cursor-pointer"
            />

            {/* Tooltip content */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 mb-2 w-64 rounded-xl shadow-lg bg-white border border-[#F1F1F1] p-4
      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center justify-center w-6 h-6 rounded">
                  <Image
                    src="/LogoMark.svg"
                    alt="logo-mark"
                    width={28}
                    height={28}
                    className="size-7"
                  />
                </div>
                <span className="font-semibold text-sm text-[#515153] leading-5 -tracking-[0.26px] align-middle">
                  Recommendations
                </span>
              </div>
              <div className="font-bold text-sm leading-[100%] -tracking-[0.26px] align-middle text-[#0A090B]">
                Low inventory detected in 12 dark stores
              </div>
              <div className="text-[13px] text-[#4F5F5B] leading-[100%] -tracking-[0.26px] align-middle">
                We have detected a DOI of less than 15 days in Golf Course Rd,
                Sarjapur Rd, and 10 more areas.
              </div>
              {/* Tooltip arrow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-16px] w-4 h-4">
                <svg width="17" height="10">
                  <polygon
                    points="0,0 17,0 8.5,10"
                    fill="white"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            src="/help.svg"
            alt="help"
            width={16}
            height={16}
            className="size-4"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between py-6 px-4 h-full">
        <div className="flex gap-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-2xl leading-5 text-[#000000] -tracking-[0.26px] align-middle">
              5678
            </span>
            <span className="flex gap-[3px] font-medium text-[13px] leading-4 text-[#1D874F] -tracking-[0.26px] align-middle">
              <ArrowUp className="size-3.5" />
              2.2%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {sellers.map((seller, idx) => (
            <div key={idx} className="flex items-center justify-between w-full">
              {/* Seller + Bar */}
              <div className="flex flex-col w-full justify-center">
                <div className="flex items-center gap-1 mb-1">
                  <Image
                    src={seller.logo} // Use actual SVG logo path or your icon component
                    alt={seller.name}
                    width={18}
                    height={18}
                    className="rounded"
                  />
                  <span className="text-[14px] font-medium text-[#515153] leading-5 -tracking-[0.26px]">
                    {seller.name}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-[210px] h-6 bg-[#E5E7EB] rounded-sm relative">
                  <div
                    style={{
                      width: seller.barWidth,
                      background: seller.barColor,
                    }}
                    className="h-6 rounded-sm"
                  />
                </div>
              </div>
              {/* Value + Percent */}
              <div className="flex justify-between items-center gap-1.5">
                <span className="font-bold text-[13px] text-[#0A090B] leading-6 -tracking-[0.26px] align-middle">
                  {seller.value}
                </span>
                <span
                  className={`font-medium text-[13px] flex items-center gap-[3px] ${
                    seller.isUp ? "text-[#1D874F]" : "text-[#F31D1D]"
                  }`}
                >
                  {seller.isUp ? (
                    <ArrowUp className="size-3.5" />
                  ) : (
                    <ArrowDown className="size-3.5" />
                  )}
                  {seller.percent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
