import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  // Push subscription kaydı
  if (body.subscription) {
    await supabase.from("push_subscriptions").insert({
      venue_id: body.venueId,
      subscription: body.subscription
    });
  }

  // Referral kaydı
  if (body.referral) {
    await supabase.from("referrals").insert({
      inviter_venue_id: body.referral
    });
  }

  return new Response("OK");
}
