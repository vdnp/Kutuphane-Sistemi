import connectDb from "./connectDb";

export async function getAll(model) {
  await connectDb();
  return model.find({});
}

export async function getById(model, id) {
  await connectDb();
  return model.findById(id);
}

export async function createItem(model, data) {
  await connectDb();
  return model.create(data);
}

export async function updateItem(model, id, data) {
  await connectDb();
  return model.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteItem(model, id) {
  await connectDb();
  return model.findByIdAndDelete(id);
}

export async function apiRequest(
  model,
  method = "GET",
  id = null,
  email = null,
  data = null
) {
  let url = `/api/${model}`;
  if (id) url += `/${id}`;
  if (email) url += `/${email}`;
  const options = { method, headers: { "Content-Type": "application/json" } };
  if (data) options.body = JSON.stringify(data);
  const res = await fetch(url, options);
  console.log(url);
  console.log(res);
  return res.json();
}
