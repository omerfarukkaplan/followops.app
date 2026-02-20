export default function Istanbul() {
  const venues = [
    {
      name: "Galata Lounge",
      occupancy: "Yoğun",
      campaign: "%20 İndirim - 18:00 sonrası",
    },
    {
      name: "Kadıköy Roof",
      occupancy: "Orta",
      campaign: "2 Al 1 Öde Kokteyl",
    },
    {
      name: "Beşiktaş Social",
      occupancy: "Boş",
      campaign: "Hafta içi %30",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">İstanbul</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-purple-600 transition"
          >
            <h2 className="text-xl font-bold mb-2">{venue.name}</h2>

            <p className="mb-2">
              Yoğunluk:{" "}
              <span className="text-purple-400">
                {venue.occupancy}
              </span>
            </p>

            <p className="text-green-400">{venue.campaign}</p>

            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 p-2 rounded-xl">
              Rezervasyon Yap
            </button>
          </div>
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import VenueCard from "@/components/VenueCard";

export default function IstanbulPage() {
  const [venues, setVenues] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    fetchVenues();
    fetchCampaigns();
  }, []);

  async function fetchVenues() {
    const { data } = await supabase
      .from("venues")
      .select("*")
      .eq("city", "istanbul");

    if (data) setVenues(data);
  }

  async function fetchCampaigns() {
    const { data } = await supabase
      .from("campaigns")
      .select("*")
      .eq("is_active", true)
      .gt("boost_expires_at", new Date().toISOString())
      .order("is_boosted", { ascending: false });

    if (data) setCampaigns(data);
  }

  return (
    <main className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        İstanbul
      </h1>

      {campaigns.length > 0 && (
        <>
          <h2 className="text-xl mb-4 text-purple-400">
            Sponsorlu Kampanyalar
          </h2>

          <div className="space-y-4 mb-8">
            {campaigns.slice(0, 3).map((c) => (
              <div
                key={c.id}
                className="bg-[#18181B] p-4 rounded-lg"
              >
                <span className="bg-purple-600 text-xs px-2 py-1 rounded">
                  Sponsorlu
                </span>
                <h3 className="font-semibold mt-2">
                  {c.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </main>
  );
}
}
