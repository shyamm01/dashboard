"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";

const skus = [
  {
    name: "Protein Bar 100g | For p...",
    value: 2487,
    delta: "1.2%",
    deltaColor: "#0CAA73",
    isUp: true,
  },
  {
    name: "Amul Full Cream Milk",
    value: 2455,
    delta: "1.2%",
    deltaColor: "#0CAA73",
    isUp: true,
  },
  {
    name: "Sunfeast Digestive Biscu...",
    value: 1242,
    delta: "7.2%",
    deltaColor: "#EF4444",
    isUp: false,
  },
  {
    name: "Creatine 1Kg",
    value: 1034,
    delta: "1.2%",
    deltaColor: "#0CAA73",
    isUp: true,
  },
  {
    name: "Creatine 1Kg",
    value: 906,
    delta: "1.2%",
    deltaColor: "#0CAA73",
    isUp: true,
  },
];

export default function TopSellingSkusCard() {
  return (
    <section className="flex flex-col rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1px_0px_0px_#0000001F] h-full relative font-inter">
      {/* Card Header */}
      <div className="flex items-center justify-between p-3 border border-[#F1F1F1] rounded-t-xl">
        <span className="text-[14px] font-semibold leading-5 text-[#515153] -tracking-[0.26px] text-center">
          Top selling SKUs
        </span>
        <Image
          src="/help.svg"
          alt="help"
          width={16}
          height={16}
          className="size-4"
        />
      </div>

      <div className="flex flex-co h-full w-full">
        <div className="flex flex-col items-center justify-center gap-3.5 py-2 px-4 w-full">
          {skus.map((sku, idx) => (
            <>
              <div
                key={idx}
                className="flex items-center justify-between w-full"
              >
                <span className="text-[#000000] font-semibold text-[13px] leading-5 max-w-[160px] truncate -tracking-[0.26px] underline">
                  {sku.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#000000] font-bold text-[13px] leading-5 -tracking-[0.26px] text-center">
                    {sku.value}
                  </span>
                  <span
                    className={`font-medium text-[13px] leading-4 flex items-center gap-0.5 ${
                      sku.isUp ? "text-[#0CAA73]" : "text-[#EF4444]"
                    }`}
                  >
                    {sku.isUp ? (
                      <ArrowUp className="size-3.5" />
                    ) : (
                      <ArrowDown className="size-3.5" />
                    )}
                    {sku.delta}
                  </span>
                </div>
              </div>
              {!(idx === skus.length - 1) ? (
                <hr className="text-[#F1F1F1] w-full" />
              ) : null}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
