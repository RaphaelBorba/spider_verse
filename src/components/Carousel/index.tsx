"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroDetails from "../HeroDetails";
import HeroPicture from "../heroPicture";

import styles from "./carousel.module.scss";

import { IHeroData } from "@/interfaces/heroes";
import { enPosition, getItemStyles } from "@/services/getItemStyles";

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
  const [visibleItems, setVisibleItem] = useState<IHeroData[] | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activeId)
  );

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );

    setVisibleItem(visibleItems);
  }, [heroes, activeIndex]);

  useEffect(() => {
    const htmlEl = document.querySelector("html");

    if (!htmlEl || !visibleItems) return;

    const currentHeroId = visibleItems[enPosition.MIDDLE].id;
    htmlEl.style.backgroundImage = `url("/spiders/${currentHeroId}-background.png")`;
    htmlEl.classList.add("hero-page");

    return () => {
      htmlEl.classList.remove("hero-page");
    };
  }, [visibleItems]);

  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onClick={() => handleChangeActiveIndex(1)}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, position) => (
              <motion.div
                key={item.id}
                className={styles.hero}
                initial={{ x: -1500, scale: 0.75 }}
                exit={{ x: 0, opacity: 0, scale: 1, left: "-20%" }}
                animate={{ x: 0, ...getItemStyles(position) }}
                transition={{ duration: 0.8 }}
              >
                <HeroPicture hero={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.details}>
        <HeroDetails data={heroes[0]} />
      </div>
    </div>
  );
}
