import { supabase } from "./supabase";

export async function getBestHour(
  venueId: string
) {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(
    fourteenDaysAgo.getDate() - 14
  );

  const { data } = await supabase
    .from("occupancy_updates")
    .select("*")
    .eq("venue_id", venueId)
    .gte(
      "created_at",
      fourteenDaysAgo.toISOString()
    );

  if (!data || data.length === 0)
    return null;

  const hourMap: Record<number, number[]> =
    {};

  data.forEach((entry) => {
    const hour = new Date(
      entry.created_at
    ).getHours();

    const score =
      entry.level === "calm"
        ? 1
        : entry.level === "medium"
        ? 2
        : 3;

    if (!hourMap[hour]) hourMap[hour] = [];
    hourMap[hour].push(score);
  });

  let bestHour = null;
  let lowestAvg = Infinity;

  for (const hour in hourMap) {
    const scores = hourMap[Number(hour)];
    const avg =
      scores.reduce((a, b) => a + b, 0) /
      scores.length;

    if (avg < lowestAvg) {
      lowestAvg = avg;
      bestHour = hour;
    }
  }

  return bestHour;
}
