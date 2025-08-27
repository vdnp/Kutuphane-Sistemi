import { NextResponse } from "next/server";
import connectDb from "@lib/connectDb";
import User from "@lib/schemas/User";

export async function POST(req) {
  await connectDb();
  const { name, lastName, email, phone, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid password" }, { status: 400 });
  }

  return NextResponse.json({ user });
}
