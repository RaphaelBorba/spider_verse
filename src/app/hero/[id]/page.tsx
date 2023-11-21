import Carousel from "@/components/Carousel";
import { getHeroesData } from "@/services/getHeroes";

interface IProps {
  params: {
    id: string;
  };
}

export default async function HeroPage({ params: { id } }: IProps) {
  const heroes = await getHeroesData();
  return <Carousel heroes={heroes.data} activeId={id} />;
}
