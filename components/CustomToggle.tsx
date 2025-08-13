"use client";
import React, { useState } from "react";

export default function CustomToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      type="button"
      className={`w-[20px] h-[13px] rounded-full border-2 border-[#027056] flex items-center transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-[#027056]" : "bg-[#E5E7EB]"
      }`}
      onClick={() => setEnabled((v) => !v)}
      aria-pressed={enabled}
    >
      <span
        className={`block w-[10px] h-[10px] rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-[6px]" : "translate-x-[0px]"
        }`}
      />
    </button>
  );
}
