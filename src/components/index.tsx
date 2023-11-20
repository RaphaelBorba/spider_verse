import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  console.log(heroes);

  return (
    <main>
      <h1>Personagens</h1>
    </main>
  );
}
