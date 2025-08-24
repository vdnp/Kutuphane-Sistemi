import { getById, updateItem, deleteItem } from "@lib/api";
import models from "@lib/models";
import { NextResponse } from "next/server";

// id ile get
export async function GET(_, { params }) {
  const resolvedParams = await params;
  const Model = models[resolvedParams.model];
  if (!Model)
    return NextResponse.json({ error: "Model not found" }, { status: 400 });
  const data = await getById(Model, resolvedParams.id);
  return NextResponse.json(data);
}

//id ile update
export async function PUT(req, { params }) {
  const resolvedParams = await params;
  const Model = models[resolvedParams.model];
  if (!Model)
    return NextResponse.json({ error: "Model not found" }, { status: 400 });
  const body = await req.json();
  const data = await updateItem(Model, resolvedParams.id, body);
  return NextResponse.json(data);
}

//id ile delete
export async function DELETE(_, { params }) {
  const resolvedParams = await params;
  const Model = models[resolvedParams.model];
  if (!Model)
    return NextResponse.json({ error: "Model not found" }, { status: 400 });
  await deleteItem(Model, resolvedParams.id);
  return NextResponse.json({ message: "Deleted" });
}
