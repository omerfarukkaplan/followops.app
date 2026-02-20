"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Card from "@/components/Card";

export default function Admin() {
  const [mrr, setMrr] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("subscriptions").select("*");
      if (data) setMrr(data.length * 29);
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <Card title="MRR" value={`$${mrr}`} />
      </div>
    </main>
  );
}