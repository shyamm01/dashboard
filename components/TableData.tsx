"use client";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const tableData = [
  {
    dayLabel: "Daily Average",
    date: "",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
    bold: true,
  },
  {
    dayLabel: "Monday",
    date: "7 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Tuesday",
    date: "6 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Wednesday",
    date: "5 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Thursday",
    date: "4 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Friday",
    date: "3 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Saturday",
    date: "2 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
  {
    dayLabel: "Sunday",
    date: "2 Dec 2024",
    overall: "₹ 421,811",
    instamart: "₹ 421,811",
    zepto: "₹ 421,811",
    blinkit: "₹ 421,811",
  },
];

export default function SalesTable() {
  return (
    <table className="min-w-full text-left">
      <thead>
        <tr className="border border-[#F1F1F1] rounded-t-xl bg-white">
          <th className="border border-[#F1F1F1] px-6 font-semibold text-[15px] leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12 ">
            Day
          </th>
          <th className="border border-[#F1F1F1] px-6 font-semibold text-[15px] leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12 ">
            <span className="flex items-center justify-center gap-1">
              Overall
              <ChevronsLeftRight className="rotate-90 size-4" />
            </span>
          </th>
          <th className=" border border-[#F1F1F1] px-6 font-semibold text-[15px] leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12  ">
            <span className="flex items-center gap-1 justify-center">
              <div className="flex items-center gap-1 mb-1">
                <Image
                  src={"/InstamartLogo.svg"} // Use actual SVG logo path or your icon component
                  alt={" Instamart"}
                  width={18}
                  height={18}
                  className="rounded"
                />
                <span className="text-[14px] font-medium text-[#515153] leading-5 -tracking-[0.26px]">
                  Instamart
                </span>
              </div>
              <ChevronsLeftRight className="rotate-90 size-4" />
            </span>
          </th>
          <th className="border border-[#F1F1F1] px-6 font-semibold text-[15px] leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12  ">
            <span className="flex items-center gap-1 justify-center">
              <div className="flex items-center gap-1 mb-1">
                <Image
                  src={"/ZeptoLogo.svg"} // Use actual SVG logo path or your icon component
                  alt={"Zepto"}
                  width={18}
                  height={18}
                  className="rounded"
                />
                <span className="text-[14px] font-medium text-[#515153] leading-5 -tracking-[0.26px]">
                  Zepto
                </span>
              </div>
              <ChevronsLeftRight className="rotate-90 size-4" />
            </span>
          </th>
          <th className="border border-[#F1F1F1] px-6 font-semibold text-[15px] leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12  ">
            <span className="flex items-center gap-1 justify-center">
              <div className="flex items-center gap-1 mb-1">
                <Image
                  src={"/BlinkitLogo.svg"} // Use actual SVG logo path or your icon component
                  alt={"blinkit"}
                  width={18}
                  height={18}
                  className="rounded"
                />
                <span className="text-[14px] font-medium text-[#515153] leading-5 -tracking-[0.26px]">
                  Blinkit
                </span>
              </div>
              <ChevronsLeftRight className="rotate-90 size-4" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, idx) => (
          <tr
            key={idx}
            className={`bg-white hover:bg-[#F7F7F7] transition-colors `}
          >
            <td
              className={`py-3 px-3 ${
                row.bold ? "font-bold text-[15px]" : "font-semibold text-[15px]"
              } border border-[#F1F1F1] px-6 leading-5 -tracking-[0.02px] align-middle text-[#013025] h-12 flex justify-between`}
            >
              {row.dayLabel}
              {row.date && (
                <span className="text-[15px] text-[#031B15] font-semibold leading-5 align-middle">
                  {row.date}
                </span>
              )}
            </td>
            <td
              className={`py-3 px-3 ${
                row.bold ? "font-bold text-[15px]" : "font-semibold text-[14px]"
              } border border-[#F1F1F1] px-6  leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12 text-center `}
            >
              {row.overall}
            </td>
            <td
              className={`py-3 px-3 ${
                row.bold ? "font-bold text-[15px]" : "font-semibold text-[14px]"
              } border border-[#F1F1F1] px-6 leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12 text-center `}
            >
              {row.instamart}
            </td>
            <td
              className={`py-3 px-3 ${
                row.bold ? "font-bold text-[15px]" : "font-semibold text-[14px]"
              } border border-[#F1F1F1] px-6 leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12  text-center`}
            >
              {row.zepto}
            </td>
            <td
              className={`py-3 px-3 ${
                row.bold ? "font-bold text-[15px]" : "font-semibold text-[14px]"
              } border border-[#F1F1F1] px-6 leading-4 -tracking-[0.02px] align-middle text-[#013025] h-12 text-center`}
            >
              {row.blinkit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
