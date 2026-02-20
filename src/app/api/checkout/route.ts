import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { type, priceId } = body;

  const apiKey = process.env.PADDLE_API_KEY;

  try {
    const res = await fetch(
      "https://api.paddle.com/transactions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              price_id: priceId,
              quantity: 1,
            },
          ],
          custom_data: {
            type,
          },
        }),
      }
    );

    const data = await res.json();

    return NextResponse.json({
      url: data.data.checkout.url,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Checkout error" },
      { status: 500 }
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 5e5d68f0d14a7ec724e3541b3cbb8ba1fce6312b
