'use server'

export async function getFilteredHouses(filters: Record<string, unknown>) {
  const params = new URLSearchParams(Object.entries(filters).reduce((acc, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {} as Record<string, string>)).toString();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/houses?${params}`);

  if (!res.ok) throw new Error('Failed to fetch houses');
  return res.json();
}
