import { IHeroData } from "@/interfaces/heroes";

export async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request heroes list!");
  }

  return res.json();
}
