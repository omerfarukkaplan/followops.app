import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("paddle-signature");

  const secret = process.env.PADDLE_WEBHOOK_SECRET!;

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function verifySignature(body: string, signature: string) {
  const secret = process.env.PADDLE_WEBHOOK_SECRET!;
  const hmac = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (hmac !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const data = JSON.parse(body);

  if (data.event_type === "transaction.completed") {
    const type = data.data.custom_data?.type;

    if (type === "premium") {
      // Supabase: tier = premium yap
    }

    if (type === "boost") {
      // Supabase: boost_expires_at = now + 7 days
    }
  }

  return NextResponse.json({ success: true });
}
  return hmac === signature;
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature =
    req.headers.get("paddle-signature") || "";

  if (!verifySignature(rawBody, signature)) {
    return new Response("Invalid signature", {
      status: 400
    });
  }

  const body = JSON.parse(rawBody);

  if (body.event_type === "transaction.completed") {
    const data = body.data;

    // Premium ödeme
    if (data.custom_data?.venue_id) {
      await supabase
        .from("venues")
        .update({ tier: "pro" })
        .eq("id", data.custom_data.venue_id);
    }

    // Boost ödeme
    if (data.custom_data?.campaign_id) {
      await supabase
        .from("campaigns")
        .update({
          is_boosted: true,
          boost_expires_at: new Date(
            Date.now() + 24 * 60 * 60 * 1000
          )
        })
        .eq("id", data.custom_data.campaign_id);
    }
  }

  return new Response("OK");
}
