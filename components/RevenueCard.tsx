import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ArrowDown, ArrowUp } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type SeriesPoint = { x: string; y: number };

const purple = "#9E6CED";
const red = "#EC6153";
const axisGrey = "#D1D3DA8F";
const tickGrey = "#6B7583";

const labels = [
  "May 09",
  "May 10",
  "May 11",
  "May 12",
  "May 13",
  "May 14",
  "May 15",
];

const purpleSeries: SeriesPoint[] = [
  { x: "May 09", y: 0.2 },
  { x: "May 10", y: 1.1 },
  { x: "May 11", y: 1.9 },
  { x: "May 12", y: 2.3 },
  { x: "May 13", y: 2.2 },
  { x: "May 14", y: 1.8 },
  { x: "May 15", y: 0.9 },
];

const redSeries: SeriesPoint[] = [
  { x: "May 09", y: 0.0 },
  { x: "May 10", y: 1.2 },
  { x: "May 11", y: 2.6 },
  { x: "May 12", y: 3.4 },
  { x: "May 13", y: 3.5 },
  { x: "May 14", y: 3.1 },
  { x: "May 15", y: 2.3 },
];

function toMillions(n: number) {
  return `$${n}M`;
}

export default function RevenueCard() {
  const total = useMemo(
    () => Math.round(redSeries.reduce((s, p) => s + p.y, 0) * 100000),
    []
  );
  const lastMonth = 135856;
  const deltaPct = useMemo(
    () => ((total - lastMonth) / Math.max(lastMonth, 1)) * 100,
    [total]
  );

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Protein Bar 100g",
        data: purpleSeries.map((p) => p.y),
        borderColor: purple,
        backgroundColor: purple + "1A",
        pointRadius: 0,
        borderWidth: 3,
        tension: 0.35,
      },
      {
        label: "Chocolate Bar 100g",
        data: redSeries.map((p) => p.y),
        borderColor: red,
        backgroundColor: red + "1A",
        pointRadius: 0,
        borderWidth: 3,
        tension: 0.35,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        intersect: false,
        mode: "index",
        padding: 10,
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#D1D5DB",
        displayColors: true,
        callbacks: {
          label: (ctx) => {
            const v = ctx.parsed.y ?? 0;
            return `${ctx.dataset.label}: ${toMillions(Number(v))}`;
          },
        },
      },
    },
    scales: {
      x: {
        suggestedMin: 0,
        suggestedMax: 6,
        grid: {
          display: true,
          color: axisGrey,
          drawTicks: false,
        },
        ticks: {
          color: tickGrey,
          padding: 20,
          maxRotation: 4,
          autoSkip: false,
        },
        border: { display: false },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 4,
        ticks: {
          color: tickGrey,
          padding: 20,
          callback: (v) => toMillions(Number(v)),
          stepSize: 1,
        },
        grid: {
          color: axisGrey,
          drawTicks: false,
        },
        border: { display: false },
      },
    },
    elements: { point: { hoverRadius: 8 } },
  };

  return (
    <section className="flex flex-col gap-[9px] py-2">
      {/* Chart area */}
      <div className="flex justify-between items-center px-4">
        {/* Headline */}
        <div className="pointer-events-none">
          <div className="text-2xl font-bold leading-8 -tracking-[0.26px] text-[#031B15]">
            ₹{total.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Right-side delta */}
        <div className="flex flex-col justify-start items-end">
          <div className="inline-flex justify-center items-center text-[15px] font-bold leading-4 -tracking-[0.26px] text-[#1D874F]">
            {deltaPct >= 0 ? (
              <ArrowUp className="size-3.5" />
            ) : (
              <ArrowDown className="size-3.5" />
            )}{" "}
            {Math.abs(deltaPct).toFixed(1)}%
          </div>
          <div className="text-[13px] font-normal leading-4 -tracking-[0.26px] text-[#031B1599]">
            vs ₹{lastMonth.toLocaleString("en-IN")} last month
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="h-[240px] border-b border-[#0000001A]">
        <Line className="" data={data} options={options} />
      </div>

      {/* Legend bar */}
      <div className="flex items-center justify-end gap-4 px-3">
        <LegendChip color={purple} bg="#9E6CED" text="1. Protein Bar 100g" />
        <LegendChip color={red} bg="#EC6153" text="2. Chocolate Bar 100g" />
      </div>
    </section>
  );
}

function LegendChip({
  color,
  text,
}: {
  color: string;
  bg: string;
  text: string;
}) {
  return (
    <span
      className="inline-flex font-medium items-center gap-2 rounded-2xl border-[1.5px] p-2 text-sm"
      style={{ color, borderColor: color }}
    >
      {text}
    </span>
  );
}
