"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from "chart.js";
import Image from "next/image";
import { ArrowDown, ArrowUp, Circle } from "lucide-react";
ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["New Delhi", "Mumbai", "West Bengal", "Bangalore"],
  datasets: [
    {
      data: [35, 23, 21, 9],
      backgroundColor: ["#7C3AED", "#EF4444", "#FBBF24", "#E5E7EB"],
      hoverBorderColor: ["#7C3AED", "#EF4444", "#FBBF24", "#E5E7EB"],
      borderWidth: 0,
      hoverBorderWidth: 2,
      borderRadius: 8,
      spacing: 5,
    },
  ],
};

const cities = [
  {
    name: "New Delhi",
    color: "#7C3AED",
    value: "₹26.5L",
    percent: "35%",
    delta: "+1.2%",
    deltaColor: "#0CAA73",
    status: "+",
  },
  {
    name: "Mumbai",
    color: "#EF4444",
    value: "₹36.4L",
    percent: "23%",
    delta: "-3.3%",
    deltaColor: "#EF4444",
    status: "-",
  },
  {
    name: "West Bengal",
    color: "#FBBF24",
    value: "₹12.2L",
    percent: "21%",
    delta: "-2.3%",
    deltaColor: "#EF4444",
    status: "-",
  },
  {
    name: "Bangalore",
    color: "#E5E7EB",
    value: "₹24.3L",
    percent: "9%",
    delta: "+1.09%",
    deltaColor: "#0CAA73",
    status: "+",
  },
];

export default function TopCitiesCard() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Attach Chart.js hover handler
  const chartOptions = {
    cutout: "78%",
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    responsive: false,
    maintainAspectRatio: false,
    onHover: (event: ChartEvent, chartElement: ActiveElement[]) => {
      if (chartElement.length > 0) {
        setHoveredIndex(chartElement[0].index);
      } else {
        setHoveredIndex(0);
      }
    },
  };

  return (
    <section className="flex flex-col rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1px_0px_0px_#0000001F]  relative font-inter">
      {/* Card Header */}
      <div className="relative flex items-center justify-between p-3 border border-[#F1F1F1] rounded-t-xl">
        <span className="text-[14px] font-semibold leading-5 text-[#515153] -tracking-[0.26px] text-center">
          Top cities
        </span>
        <Image
          src="/help.svg"
          alt="help"
          width={16}
          height={16}
          className="size-4"
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        {/* Chart and total */}
        <div className="flex flex-col items-center py-2 px-3 gap-2.5">
          <div className="relative" style={{ width: 193, height: 104 }}>
            <Doughnut
              width={193}
              height={104}
              data={chartData}
              options={chartOptions}
            />
            {/* Center overlay */}
            <div
              className="absolute flex flex-col items-center"
              style={{
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div className="flex flex-col gap-1 -tracking-[0.26px]">
                <span className="font-normal text-[13px] leading-5 text-[#7D7D7E]">
                  Total
                </span>
                <span className="font-bold text-[18px] leading-5 text-[#000000]">
                  ₹68.2L
                </span>
                <span className="flex justify-center items-center font-medium text-[13px] leading-4 text-[#1D874F]">
                  <ArrowUp className="size-4" /> 2.2%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 relative p-3 ">
          {cities.map((city, idx) => (
            <div
              key={city.name}
              className={`flex items-center justify-between transition-all duration-150 ${
                hoveredIndex === idx ? "bg-[#F3F0FF] rounded-[4px]" : ""
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span style={{ color: city.color }}>
                  <Circle className="size-1.5" fill={city.color} />
                </span>
                <span className="text-[#7D7D7E] font-normal text-[13px] leading-4 -tracking-[-0.26px]">
                  {city.name}
                </span>
              </div>
              <div className="flex items-start justify-start gap-1.5">
                <span className="text-[#000000] font-bold text-[13px] leading-4 -tracking-[-0.26px]">
                  {city.value}
                </span>
                <span className="text-[#7D7D7E] font-medium text-[13px] leading-4 -tracking-[-0.26px] py-0.5 px-1 bg-[#F7F7F7] rounded-[2px]">
                  {city.percent}
                </span>
                <span
                  className="text-[14px] ml-1 flex items-center"
                  style={{ color: city.deltaColor }}
                >
                  {city.status === "+" ? (
                    <ArrowUp className="size-4" />
                  ) : (
                    <ArrowDown className="size-4" />
                  )}
                  {city.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
