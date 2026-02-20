"use client";

import { useState } from "react";
<<<<<<< HEAD
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Kayıt Ol</h2>

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-zinc-800 border border-zinc-700"
=======
import { signUp } from "@/lib/auth";
import { useRouter, useSearchParams } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [name, setName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  async function handleRegister() {
    try {
      const data = await signUp(
        email,
        password,
        name
      );

      if (ref) {
        await fetch("/api/save-subscription", {
          method: "POST",
          body: JSON.stringify({
            referral: ref
          })
        });
      }

      router.push("/dashboard");
    } catch {
      alert("Kayıt başarısız");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-[#18181B] p-8 rounded-xl w-96 space-y-4">
        <h1 className="text-xl font-bold">
          Mekan Kayıt
        </h1>

        <input
          className="w-full p-2 bg-[#333] rounded"
          placeholder="İsim"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="w-full p-2 bg-[#333] rounded"
          placeholder="E-posta"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
>>>>>>> 5e5d68f0d14a7ec724e3541b3cbb8ba1fce6312b
        />

        <input
          type="password"
<<<<<<< HEAD
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-zinc-800 border border-zinc-700"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-xl transition">
          Kayıt Ol
        </button>

        <p className="mt-6 text-sm text-zinc-400">
          Zaten hesabın var mı?{" "}
          <Link href="/login" className="text-purple-400">
            Giriş Yap
          </Link>
        </p>
      </div>
    </main>
  );
}
=======
          className="w-full p-2 bg-[#333] rounded"
          placeholder="Şifre"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleRegister}
          className="w-full bg-yellow-400 text-black py-2 rounded"
        >
          Kayıt Ol
        </button>
      </div>
    </main>
  );
}
>>>>>>> 5e5d68f0d14a7ec724e3541b3cbb8ba1fce6312b
