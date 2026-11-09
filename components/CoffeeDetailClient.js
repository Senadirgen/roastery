
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartLink from "./CartLink";

export default function CoffeeDetailClient({ coffee }) {
  const [selectedWeight, setSelectedWeight] = useState(250);
  const [message, setMessage] = useState("");

  const weights = [250, 500, 1000];

  const currentPrice = coffee.price * (selectedWeight / 250);

  const roastValue = coffee.roastLevel.toLocaleLowerCase("tr-TR");

  let roastScore = 3;

  if (roastValue.includes("açık") || roastValue.includes("light")) {
    roastScore = 1;
  } else if (roastValue.includes("koyu") || roastValue.includes("dark")) {
    roastScore = 5;
  } else if (roastValue.includes("orta") || roastValue.includes("medium")) {
    roastScore = 3;
  }

  function addToCart() {
    const cartItem = {
      id: coffee.id,
      name: coffee.name,
      imageUrl: coffee.imageUrl,
      weight: selectedWeight,
      price: currentPrice,
      quantity: 1,
    };

    try {
      const existingCart = JSON.parse(
        localStorage.getItem("roastery-cart") || "[]"
      );

      const existingItem = existingCart.find(
        (item) =>
          item.id === cartItem.id && item.weight === cartItem.weight
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem("roastery-cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("roastery-cart-updated"));
      setMessage("Ürün sepetine eklendi.");
    } catch {
      setMessage("Ürün sepete eklenemedi. Tekrar deneyebilirsin.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#33271F]">
      <header className="px-6 md:px-16 py-7 border-b border-[#33271F]/10 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl tracking-widest hover:opacity-70 transition-opacity"
        >
          ROASTERY<span className="text-[#78816A]">.</span>
        </Link>

        <CartLink />
      </header>

      <div className="px-6 md:px-16 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#78816A] hover:text-[#33271F] transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>Kahve seçkisine dön</span>
        </Link>
      </div>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-12 items-start max-w-7xl mx-auto">
        <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden bg-[#E8E0D4] rounded-sm group">
          <Image
            src={coffee.imageUrl}
            alt={coffee.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {coffee.processMethod && (
            <span className="absolute top-6 left-6 bg-[#F5F1E8]/90 text-[#33271F] text-xs tracking-widest uppercase px-3 py-2 border border-[#33271F]/10">
              {coffee.processMethod}
            </span>
          )}
        </div>

        <div className="max-w-xl">
          <p className="text-[#78816A] text-xs tracking-[0.3em] font-semibold mb-3 uppercase">
            {coffee.origin}
          </p>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-5">
            {coffee.name}
          </h1>

          <p className="text-sm text-[#33271F]/60 mb-8">
            Özenle seçilmiş, taze kavrulmuş özel kahve.
          </p>

          <div className="mb-8">
            <p className="text-3xl font-serif">
              ₺{currentPrice.toLocaleString("tr-TR")}
            </p>
            <p className="text-xs text-[#78816A] mt-2">
              {selectedWeight === 1000
                ? "1 kg"
                : `${selectedWeight} g`}{" "}
              paket fiyatı
            </p>
          </div>

          <div className="border-t border-[#33271F]/20 py-7">
            <p className="text-xs tracking-widest text-[#78816A] font-medium mb-4">
              GRAMAJ SEÇ
            </p>

            <div className="grid grid-cols-3 gap-3">
              {weights.map((weight) => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => {
                    setSelectedWeight(weight);
                    setMessage("");
                  }}
                  className={`py-4 border text-sm transition-all ${
                    selectedWeight === weight
                      ? "bg-[#33271F] text-[#F5F1E8] border-[#33271F]"
                      : "border-[#33271F]/20 hover:border-[#33271F]"
                  }`}
                >
                  {weight === 1000 ? "1 kg" : `${weight} g`}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#33271F]/20 py-7">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-widest text-[#78816A] font-medium">
                KAVRUM SEVİYESİ
              </p>
              <span className="text-sm font-medium">
                {coffee.roastLevel}
              </span>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-2 flex-1 rounded-full ${
                    level <= roastScore
                      ? "bg-[#33271F]"
                      : "bg-[#33271F]/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="border-t border-[#33271F]/20 py-7">
            <p className="text-xs tracking-widest text-[#78816A] font-medium mb-4">
              AROMA NOTALARI
            </p>

            <div className="flex flex-wrap gap-2">
              {coffee.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="border border-[#33271F]/20 px-4 py-2 text-xs tracking-wide"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#33271F]/20 py-7">
            <p className="text-xs tracking-widest text-[#78816A] font-medium mb-3">
              BU KAHVE HAKKINDA
            </p>

            <p className="text-[#33271F]/80 leading-relaxed text-sm md:text-base">
              {coffee.description}
            </p>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={addToCart}
              className="w-full bg-[#33271F] text-[#F5F1E8] px-8 py-5 text-xs tracking-[0.2em] uppercase hover:bg-[#78816A] transition-all duration-300"
            >
              Sepete Ekle — ₺{currentPrice.toLocaleString("tr-TR")}
            </button>

            {message && (
              <p
                aria-live="polite"
                className="text-sm text-[#78816A] mt-4 text-center"
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-8 border-t border-[#33271F]/10 text-xs text-[#33271F]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 ROASTERY. TÜM HAKLARI SAKLIDIR.</span>
        <span>ÖZEL KAHVE SEÇKİSİ</span>
      </footer>
    </main>
  );
}
