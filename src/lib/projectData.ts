

export async function getOffers() {
  const res = await fetch("http://localhost:3001/offers");
  if (!res.ok) throw new Error("Failed to fetch offers");
  return res.json();
}

export async function getParties() {
  const res = await fetch("http://localhost:3001/parties");
  if (!res.ok) throw new Error("Failed to fetch parties");
  return res.json();
}


export async function getLocalMatchs() {
  const res = await fetch("http://localhost:3001/localMatchs");
  if (!res.ok) throw new Error("Failed to fetch localMatchs");
  return res.json();
}

export async function getGlobalMatchs() {
  const res = await fetch("http://localhost:3001/GlobalMatchs");
  if (!res.ok) throw new Error("Failed to fetch GlobalMatchs");
  return res.json();
}

export async function getMatchs() {
  const [localRes, globalRes] = await Promise.all([
    fetch("http://localhost:3001/localMatchs",{ cache: "no-store" }),
    fetch("http://localhost:3001/GlobalMatchs",{ cache: "no-store" }),
  ]);

  if (!localRes.ok || !globalRes.ok) {
    throw new Error("Failed to fetch one of the matches");
  }

  const localMatchs = await localRes.json();
  const globalMatchs = await globalRes.json();

  
  return [...localMatchs, ...globalMatchs];
}

