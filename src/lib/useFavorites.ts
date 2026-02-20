"use client";

import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] =
    useState<string[]>([]);

  useEffect(() => {
    const stored =
      localStorage.getItem("favorites");
    if (stored)
      setFavorites(JSON.parse(stored));
  }, []);

  function toggleFavorite(id: string) {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter(
        (f) => f !== id
      );
    } else {
      if (favorites.length >= 3) {
        alert(
          "En fazla 3 favori ekleyebilirsiniz."
        );
        return;
      }
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  }

  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
}
