
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartLink from "../../components/CartLink";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("roastery-cart") || "[]"
    );

    setCart(savedCart);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("roastery-cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("roastery-cart-updated"));
    }
  }, [cart, loaded]);

  function updateQuantity(id, weight, change) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id === id && item.weight === weight) {
            return {
              ...item,
              quantity: item.quantity + change,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id, weight) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => !(item.id === id && item.weight === weight)
      )
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <p className="text-sm tracking-widest text-[#78816A]">
          SEPETİN YÜKLENİYOR...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#33271F]">
      {/* HEADER */}
      <header className="px-6 md:px-16 py-7 border-b border-[#33271F]/10 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl tracking-widest">
          ROASTERY<span className="text-[#78816A]">.</span>
        </Link>

        <Link
          href="/"
          className="text-xs tracking-widest text-[#78816A] hover:text-[#33271F]"
        >
          ALIŞVERİŞE DEVAM ET →
        </Link>
      </header>

      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <p className="text-xs tracking-[0.3em] text-[#78816A] mb-4">
          ROASTERY / SEPETİM
        </p>

        <h1 className="font-serif text-4xl md:text-5xl mb-12">
          Sepetim
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24 border-t border-[#33271F]/15">
            <h2 className="font-serif text-3xl mb-4">
              Sepetin henüz boş.
            </h2>

            <p className="text-sm text-[#33271F]/60 mb-8">
              Kendine özel kahveni keşfetmeye ne dersin?
            </p>

            <Link
              href="/"
              className="inline-block bg-[#33271F] text-[#F5F1E8] px-8 py-4 text-xs tracking-widest hover:bg-[#78816A] transition-colors"
            >
              KAHVELERİ KEŞFET
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            {/* CART ITEMS */}
            <div className="border-t border-[#33271F]/20">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.weight}`}
                  className="py-7 border-b border-[#33271F]/15 flex flex-col sm:flex-row gap-6"
                >
                  <div className="relative w-full sm:w-36 h-40 bg-[#E8E0D4] shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-serif text-2xl">
                        {item.name}
                      </h2>

                      <p className="text-xs text-[#78816A] mt-2">
                        {item.weight === 1000 ? "1 kg" : `${item.weight} g`}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-end gap-4 mt-6">
                      <div className="flex items-center border border-[#33271F]/20">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.weight, -1)
                          }
                          className="px-4 py-2 hover:bg-[#E8E0D4]"
                          aria-label="Adedi azalt"
                        >
                          −
                        </button>

                        <span className="px-3 text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.weight, 1)
                          }
                          className="px-4 py-2 hover:bg-[#E8E0D4]"
                          aria-label="Adedi artır"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-medium">
                          ₺
                          {(item.price * item.quantity).toLocaleString(
                            "tr-TR"
                          )}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.weight)}
                          className="text-xs text-[#78816A] underline mt-2 hover:text-[#33271F]"
                        >
                          Ürünü kaldır
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <aside className="bg-[#EAE3D8] p-7 h-fit">
              <h2 className="font-serif text-2xl mb-7">
                Sipariş Özeti
              </h2>

              <div className="flex justify-between text-sm mb-4">
                <span>Ürün sayısı</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between text-sm mb-6">
                <span>Ara toplam</span>
                <span>₺{total.toLocaleString("tr-TR")}</span>
              </div>

              <div className="border-t border-[#33271F]/20 pt-5 flex justify-between items-center">
                <span className="font-medium">Toplam</span>
                <span className="font-serif text-2xl">
                  ₺{total.toLocaleString("tr-TR")}
                </span>
              </div>

              <button
                type="button"
                disabled
                className="w-full bg-[#33271F]/50 text-[#F5F1E8] py-4 mt-8 text-xs tracking-widest cursor-not-allowed"
              >
                ÖDEME ADIMI YAKINDA
              </button>

              <p className="text-xs text-[#33271F]/50 text-center mt-4">
                Kargo ve ödeme seçenekleri sonraki aşamada eklenecek.
              </p>
            </aside>
          </div>
        )}
      </section>

      <footer className="px-6 md:px-16 py-8 border-t border-[#33271F]/10 text-xs text-[#33271F]/60 flex justify-between">
        <span>© 2026 ROASTERY.</span>
        <span>ÖZEL KAHVE SEÇKİSİ</span>
      </footer>
    </main>
  );
}
