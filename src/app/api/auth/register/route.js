import { NextResponse } from "next/server";
import connectDb from "@lib/connectDb";
import User from "@lib/schemas/User";

export async function POST(req) {
  await connectDb();
  const { name, lastName, email, phone, password } = await req.json();
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json({ error: "Already Exist" }, { status: 400 });
  }

  const newUser = await User.create({
    name,
    lastName,
    email,
    phone,
    password,
    role: "student",
  });
}
