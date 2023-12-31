import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { getHeroesData } from "@/services/getHeroes";

export default async function Home() {
  const heroes = await getHeroesData();

  if (!heroes) return null;
  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
