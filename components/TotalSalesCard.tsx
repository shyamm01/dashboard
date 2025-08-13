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

export default function TotalSalesCard() {
  return (
    <section className="flex flex-col rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1px_0px_0px_#0000001F] h-full relative font-inter">
      {/* Card Header */}
      <div className="flex items-center justify-between p-3 border border-[#F1F1F1] rounded-t-xl">
        <span className="text-[14px] font-semibold leading-5 text-[#515153] -tracking-[0.26px] text-center">
          Total sales
        </span>
        <div className="flex justify-between items-center gap-4">
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
                    className="flex items-center h-6 rounded-sm"
                  >
                    <span className="py-0.5 px-1 rounded-[2px] font-normal text-[13px] leading-4 text-[#FFFFFF] -tracking-[0.26px] align-middle">
                      {seller.barWidth}
                    </span>
                  </div>
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
