"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import VenueManager from "@/components/VenueManager";

export default function Dashboard() {
  const [venue, setVenue] =
    useState<any>(null);

  useEffect(() => {
    fetchVenue();
  }, []);

  async function fetchVenue() {
    const { data: user } =
      await supabase.auth.getUser();

    const { data } = await supabase
      .from("venues")
      .select("*")
      .eq("owner_id", user.user?.id)
      .single();

    setVenue(data);
  }

  if (!venue)
    return (
      <p className="p-6">Yükleniyor...</p>
    );

  return (
    <main className="p-6">
      <VenueManager venue={venue} />
    </main>
  );
}
