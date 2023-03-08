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

export async function loginUser(credintials) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(credintials),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
