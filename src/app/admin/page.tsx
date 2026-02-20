"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Card from "@/components/Card";
import Card from "@/components/VenueCard";

export default function Admin() {
  const [mrr, setMrr] = useState(0);
  const [arr, setArr] = useState(0);
  const [premium, setPremium] =
    useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await supabase
      .from("venues")
      .select("tier");

    let total = 0;
    let premiumCount = 0;

    data?.forEach((v) => {
      if (v.tier === "pro") {
        total += 2000;
        premiumCount++;
      }
      if (v.tier === "elite") {
        total += 3500;
        premiumCount++;
      }
    });

    setMrr(total);
    setArr(total * 12);
    setPremium(premiumCount);
  }

  return (
    <div className="p-8 grid grid-cols-3 gap-6">
      <Card title="MRR" value={`${mrr} TL`} />
      <Card title="ARR" value={`${arr} TL`} />
      <Card
        title="Premium Mekan"
        value={premium}
      />
      <Card
        title="Valuation (6x)"
        value={`${arr * 6} TL`}
      />
    </div>
  );
}
