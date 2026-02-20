"use client";

import useFavorites from "@/lib/useFavorites";

export default function VenueCard({ venue }: any) {
  const { toggleFavorite, isFavorite } =
    useFavorites();

  const occupancyColor =
    venue.current_level === "calm"
      ? "bg-green-500"
      : venue.current_level === "medium"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-[#18181B] p-5 rounded-xl space-y-3">

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {venue.name}
        </h3>

        <button
          onClick={() =>
            toggleFavorite(venue.id)
          }
          className="text-sm"
        >
          {isFavorite(venue.id)
            ? "⭐"
            : "☆"}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`w-3 h-3 rounded-full ${occupancyColor}`}
        ></span>

        <span className="text-sm text-gray-400">
          {venue.current_level === "calm" &&
            "Sakin"}
          {venue.current_level ===
            "medium" && "Orta"}
          {venue.current_level === "busy" &&
            "Yoğun"}
        </span>
      </div>

      {venue.tier === "elite" && (
        <span className="bg-purple-600 text-xs px-2 py-1 rounded">
          Elite
        </span>
      )}
    </div>
  );
}
