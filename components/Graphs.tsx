"use client";
import React from "react";
import RevenueCard from "./RevenueCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-12 ">
      <div
        className="flex flex-col gap-6 bg-white rounded-xl border border-[#0000001A]"
        style={{ boxShadow: "0px 1px 0px 0px #0000001F" }}
      >
        <div className="border-b border-[#0000001A] p-4 flex justify-between">
          <div className="flex gap-2.5">
            <PillButton label="Revenue" onClick={() => {}} />
            <PillButton label="Blended Ad Spend" onClick={() => {}} />
          </div>
          <div className="flex gap-2.5">
            <PillButton label="Daily" onClick={() => {}} />
          </div>
        </div>

        <RevenueCard />
      </div>
    </div>
  );
}

interface PillButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  iconRight?: React.ReactNode;
}

const PillButton: React.FC<PillButtonProps> = ({
  label,
  onClick,
  className = "",
  iconRight = <CaretDown />,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "inline-flex items-center gap-2",
      "rounded-xl px-4 py-2.5 h-[40px]",
      "border border-[#E5E7EB] bg-white",
      "text-[14px] leading-[20px] text-[#111827] font-medium",
      "hover:border-[#D1D5DB]",
      "focus:outline-none focus:ring-1 focus:ring-[#D1FAE5]/60 focus:ring-offset-0",
      className,
    ].join(" ")}
  >
    <span>{label}</span>
    {iconRight}
  </button>
);

const CaretDown = ({ size = 20, color = "#111827" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6.75 9.75l5.25 5.25 5.25-5.25"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
