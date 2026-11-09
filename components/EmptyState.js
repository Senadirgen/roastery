
export default function EmptyState({ onReset }) {
  return (
    <div className="text-center py-20 px-4 bg-white/30 border border-dashed border-[#33271F]/20 max-w-md mx-auto">
      <div className="text-3xl mb-3">☕</div>

      <h3 className="font-serif text-xl text-[#33271F] mb-2">
        Aradığınız kahveyi bulamadık.
      </h3>

      <p className="text-xs text-[#78816A] mb-6">
        Farklı bir kahve adı, bölge veya aroma notası deneyebilirsiniz.
      </p>

      <button
        onClick={onReset}
        className="bg-[#33271F] text-[#F5F1E8] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#78816A] transition-colors"
      >
        Aramayı Temizle
      </button>
    </div>
  );
}
