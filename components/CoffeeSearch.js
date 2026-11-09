"use client";

import { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import EmptyState from "./EmptyState";

export default function CoffeeSearch({ coffees }) {
  const [search, setSearch] = useState("");

  const filteredCoffees = coffees.filter((coffee) => {
    const searchText = search.toLocaleLowerCase("tr-TR");

    return (
      coffee.name.toLocaleLowerCase("tr-TR").includes(searchText) ||
      coffee.origin.toLocaleLowerCase("tr-TR").includes(searchText) ||
      coffee.tastingNotes.some((note) =>
        note.toLocaleLowerCase("tr-TR").includes(searchText)
      )
    );
  });

  return (
    <div>
      <div className="mb-14 max-w-xl">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kahve, bölge veya aroma notası ara..."
            aria-label="Kahve ara"
            className="w-full bg-transparent border-b border-[#33271F]/30 py-5 pr-10 outline-none focus:border-[#78816A] transition-colors text-sm"
          />

          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-[#78816A]">
            ⌕
          </span>
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-[10px] tracking-widest text-[#33271F]/50">
            KAHVE SEÇKİMİZİ KEŞFEDİN
          </p>

          <p className="text-xs text-[#33271F]/50">
            {filteredCoffees.length} kahve bulundu
          </p>
        </div>
      </div>

      {filteredCoffees.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      ) : (
        <EmptyState onReset={() => setSearch("")} />
      )}
    </div>
  );
}
