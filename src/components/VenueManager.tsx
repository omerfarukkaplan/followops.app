"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Venue {
  id: string;
  name: string;
  city: string;
}

export default function VenueManager() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  async function fetchVenues() {
    const { data } = await supabase.from("venues").select("*");
    if (data) setVenues(data);
  }

  async function addVenue() {
    if (!name || !city) return;

    await supabase.from("venues").insert([{ name, city }]);
    setName("");
    setCity("");
    fetchVenues();
  }

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h2 className="text-xl font-bold mb-4 text-white">Venue Manager</h2>

      <div className="flex gap-4 mb-6">
        <input
          className="bg-zinc-800 text-white p-2 rounded w-full"
          placeholder="Venue Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-zinc-800 text-white p-2 rounded w-full"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={addVenue}
          className="bg-blue-600 px-4 rounded text-white"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-zinc-800 p-3 rounded text-white"
          >
            {venue.name} — {venue.city}
          </div>
        ))}
      </div>
    </div>
  );
}