import { useLoaderData } from "react-router-dom";

function useCarouselLogic(index) {
  const data = useLoaderData();
  const isMobileScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const shouldUseCarousel =
    (!isMobileScreen && data[index].results.length >= 5) ||
    (isMobileScreen && data[index].results.length >= 4);

  return shouldUseCarousel;
}

export default useCarouselLogic;
