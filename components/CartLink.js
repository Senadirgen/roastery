"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartLink() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateCartCount() {
      const cart = JSON.parse(
        localStorage.getItem("roastery-cart") || "[]"
      );

      const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCount(totalItems);
    }

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("roastery-cart-updated", updateCartCount);

    return () => {
  window.removeEventListener("storage", updateCartCount);
  window.removeEventListener("roastery-cart-updated", updateCartCount);
};
  }, []);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-3 border border-[#33271F] px-5 py-3 text-[10px] tracking-[0.15em] hover:bg-[#33271F] hover:text-white transition-all"
    >
      <span>SEPETİM</span>

      <span className="flex items-center justify-center min-w-5 h-5 rounded-full bg-[#78816A] text-white text-[10px] px-1">
        {count}
      </span>
    </Link>
  );
}