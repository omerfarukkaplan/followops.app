"use client";

import { registerServiceWorker } from "@/lib/registerSW";
import { subscribeUser } from "@/lib/push";

export default function EnablePush({
  venueId
}: {
  venueId: string;
}) {
  async function enable() {
    registerServiceWorker();
    await subscribeUser(venueId);
    alert("Bildirimler aktif!");
  }

  return (
    <button
      onClick={enable}
      className="bg-purple-500 px-4 py-2 rounded"
    >
      Bildirim Aç
    </button>
  );
}
