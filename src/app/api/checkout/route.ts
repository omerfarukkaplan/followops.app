import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "Checkout created",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Checkout error" },
      { status: 500 }
    );
  }
}