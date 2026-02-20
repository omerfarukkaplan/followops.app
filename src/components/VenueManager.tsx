"use client";

import { useState } from "react";

export default function VenueManager() {
  const [loading, setLoading] = useState<string | null>(null);

  const premiumPriceId = process.env.NEXT_PUBLIC_PREMIUM_PRICE_ID!;
  const boostPriceId = process.env.NEXT_PUBLIC_BOOST_PRICE_ID!;
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL!;

  const handleCheckout = async (type: "premium" | "boost") => {
    try {
      setLoading(type);

      const body =
        type === "premium"
          ? { type, priceId: premiumPriceId }
          : { type, priceId: boostPriceId };

      const res = await fetch(checkoutUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Ödeme başlatılamadı.");
      }
    } catch (err) {
      console.error(err);
      alert("Bir hata oluştu.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800 text-white">
      <h2 className="text-2xl font-bold mb-8">Gelir Paneli</h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* PREMIUM */}
        <div className="bg-black p-6 rounded-xl border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Premium Üyelik
          </h3>

          <button
            onClick={() => handleCheckout("premium")}
            disabled={loading === "premium"}
            className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading === "premium"
              ? "Yönlendiriliyor..."
              : "Premium Satın Al"}
          </button>
        </div>

        {/* BOOST 3 GÜN */}
        <div className="bg-black p-6 rounded-xl border border-blue-700">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Boost (3 Gün)
          </h3>

          <p className="text-zinc-400 mb-4 text-sm">
            ✔ 3 gün üst sıralarda görünürlük  
            ✔ Ana sayfa vitrini  
            ✔ Kampanya öne çıkarma
          </p>

          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-400">
              ₺990
            </span>
          </div>

          <button
            onClick={() => handleCheckout("boost")}
            disabled={loading === "boost"}
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading === "boost"
              ? "Yönlendiriliyor..."
              : "Boost Satın Al"}
          </button>
        </div>

      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5e5d68f0d14a7ec724e3541b3cbb8ba1fce6312b
