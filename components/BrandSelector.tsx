"use client";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export default function BrandSelector() {
  const allBrands = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Sony" },
    { id: 3, name: "Apple" },
    { id: 4, name: "LG" },
    { id: 5, name: "Nokia" },
    { id: 6, name: "OnePlus" },
    { id: 7, name: "Xiaomi" },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(allBrands[0]);
  const [search, setSearch] = useState("");

  const filteredBrands = allBrands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-[180.875px]">
      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="h-[36px] flex items-center justify-between rounded-xl border border-gray-200 p-1.5 bg-white hover:shadow-sm w-full"
      >
        <div className="flex items-center gap-2 relative">
          <div className="p-[5px] rounded-[7px] bg-[#309E96] flex items-center justify-center text-white text-xs font-semibold relative">
            <span className="text-[11px]">
              {selected.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-900">
            {selected.name}
          </span>
        </div>

        <ChevronsLeftRight className="rotate-90 size-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-md z-10 overflow-hidden">
          {/* Search box */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none"
            />
          </div>

          {/* Brand List */}
          <div className="max-h-40 overflow-y-auto">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    setSelected(brand);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                    selected.id === brand.id ? "bg-gray-100" : ""
                  }`}
                >
                  {brand.name}
                </button>
              ))
            ) : (
              <div className="p-3 text-sm text-gray-500">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
