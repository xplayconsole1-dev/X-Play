import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "49.23% 36.48%",
      initialMaskSize: "35000% 35000%",
      maskPos: "50% 25%",
      maskSize: "55% 55%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "49.23% 36.48%",
      initialMaskSize: "35000% 35000%",
      maskPos: "50% 28%",
      maskSize: "32% 32%",
    };
  }

  return {
    initialMaskPos: "49.23% 36.48%",
    initialMaskSize: "35000% 35000%",
    maskPos: "50% 28%",
    maskSize: "20% 20%",
  };
};