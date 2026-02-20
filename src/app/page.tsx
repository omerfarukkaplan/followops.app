"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        FollowOps
      </h1>

      <p className="text-zinc-400 text-lg text-center max-w-xl mb-10">
        Şehrin canlı yoğunluk, kampanya ve rezervasyon ağı.  
        Kalabalıktan kaç, fırsatları yakala.
      </p>

      <div className="flex gap-6">
        <Link
          href="/istanbul"
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
        >
          İstanbul'u Keşfet
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">
        FollowOps
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl">
        Şehrin canlı yoğunluk, kampanya ve rezervasyon ağı.
        Kalabalıktan kaçın, fırsatları yakala.
      </p>

      <div className="flex gap-4">
        <Link
          href="/istanbul"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg"
        >
          Şehri Keşfet
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 rounded-xl border border-zinc-600 hover:bg-zinc-800 transition"
          className="border border-yellow-400 px-6 py-3 rounded-lg"
        >
          Mekan Girişi
        </Link>
      </div>
    </main>
  );
}
}
