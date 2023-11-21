import HeroDetails from "../HeroDetails";

import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default async function Carousel({ heroes, activeId }: IProps) {
  return (
    <>
      <h1>Componente</h1>
      <HeroDetails data={heroes[0]} />
    </>
  );
}
