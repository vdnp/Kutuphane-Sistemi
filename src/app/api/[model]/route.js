import { getAll, createItem } from "@lib/api";
import models from "@lib/models";
import { NextResponse } from "next/server";

//model içindeki verileri fetch
export async function GET(_, { params }) {
  const resolvedParams = await params;
  const Model = models[resolvedParams.model];
  if (!Model)
    return NextResponse.json({ error: "Model not found" }, { status: 400 });
  const data = await getAll(Model);
  return NextResponse.json(data);
}

//create
export async function POST(req, { params }) {
  const resolvedParams = await params;
  const Model = models[resolvedParams.model];
  if (!Model)
    return NextResponse.json({ error: "Model not found" }, { status: 400 });
  const body = await req.json();
  const data = await createItem(Model, body);
  return NextResponse.json(data);
}
