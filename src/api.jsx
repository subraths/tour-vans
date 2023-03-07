export async function getVans() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  return data.vans;
}

export async function getVanDetail(id) {
  const res = await fetch(`/api/vans/${id}`);
  const data = await res.json();
  return data;
}
