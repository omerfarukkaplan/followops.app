"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Mekan Girişi</h2>

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-zinc-800 border border-zinc-700"
import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      alert("Giriş başarısız");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-[#18181B] p-8 rounded-xl w-96 space-y-4">
        <h1 className="text-xl font-bold">
          Mekan Girişi
        </h1>

        <input
          className="w-full p-2 bg-[#333] rounded"
          placeholder="E-posta"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-xl transition">
          Giriş Yap
        </button>

        <p className="mt-6 text-sm text-zinc-400">
          Hesabın yok mu?{" "}
          <Link href="/register" className="text-purple-400">
            Kayıt Ol
          </Link>
        </p>
      </div>
    </main>
  );
}
          className="w-full p-2 bg-[#333] rounded"
          placeholder="Şifre"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black py-2 rounded"
        >
          Giriş Yap
        </button>
      </div>
    </main>
  );
}
