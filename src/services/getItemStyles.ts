export enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

export const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      zIndex: 3,
      filter: "blur(10px)",
      scale: 1.2,
    };
  }

  if (position === enPosition.MIDDLE) {
    return {
      zIndex: 2,
      left: 300,
      scale: 0.8,
      top: "-10%",
    };
  }

  return {
    zIndex: 1,
    filter: "blur(10px)",
    left: 160,
    top: "-20%",
    scale: 0.6,
    opacity: 0.8,
  };
};
