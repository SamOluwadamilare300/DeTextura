
// pages/api/webhook.ts
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Store your Flutterwave webhook secret securely in your .env.local file
const FLUTTERWAVE_SECRET = process.env.FLUTTERWAVE_SECRET! || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    
    // Get the verification signature from the headers
    const signature = headers().get("verif-hash");
    if (!signature) {
      return new NextResponse("Invalid Signature", { status: 400 });
    }

    // Validate the request signature
    const expectedSignature = crypto
      .createHmac("sha256", FLUTTERWAVE_SECRET)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    // Parse the request body to JSON
    const event = JSON.parse(body);
    
    // Handle the specific Flutterwave event (e.g., charge.completed)
    if (event.event === "charge.completed") {
      const paymentData = event.data;
      console.log("Payment successful:", paymentData);

      // TODO: Implement further processing, like updating the database
      return new NextResponse(JSON.stringify({ message: "Payment processed successfully" }), { status: 200 });
    } else {
      console.log("Unhandled event type:", event.event);
      return new NextResponse(JSON.stringify({ message: "Unhandled event type" }), { status: 400 });
    }

  } catch (error) {
    console.error("Error processing webhook:", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
