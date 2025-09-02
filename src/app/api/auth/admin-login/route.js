import { NextResponse } from "next/server";
import connectDb from "@lib/connectDb";
import User from "@lib/schemas/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDb();
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 400 });
  }
  return NextResponse.json({ user });
}
