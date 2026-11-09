import Link from "next/link";

export default function CoffeeCard({ coffee }) {
  return (
    <Link
      href={`/coffees/${coffee.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-[#EAE3D6]">
        <img
          src={coffee.imageUrl}
          alt={coffee.name}
          className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#33271F]/0 group-hover:bg-[#33271F]/10 transition-colors duration-500" />

        <div className="absolute bottom-5 left-5 right-5 bg-[#F5F1E8] text-[#33271F] py-4 text-center text-[10px] tracking-[0.2em] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          KAHVEYİ İNCELE →
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[10px] tracking-[0.2em] text-[#78816A] uppercase">
            {coffee.origin}
          </p>

          <p className="text-xs text-[#33271F]/60">
            ₺{coffee.price}
          </p>
        </div>

        <h3 className="font-serif text-2xl text-[#33271F] group-hover:text-[#78816A] transition-colors">
          {coffee.name}
        </h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {coffee.tastingNotes.map((note) => (
            <span
              key={note}
              className="text-[10px] text-[#33271F]/65 border border-[#33271F]/15 px-3 py-2"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#33271F]/15">
          <p className="text-[9px] tracking-[0.15em] text-[#78816A]">
            {coffee.roastLevel.toLocaleUpperCase("tr-TR")} KAVRUM
          </p>

          <span className="text-xs text-[#33271F]/50 group-hover:text-[#78816A] transition-colors">
            KEŞFET →
          </span>
        </div>
      </div>
    </Link>
  );
}
