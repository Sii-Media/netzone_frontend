import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MultiItemCarousel = ({
  items,
  autoPlayDirection,
  count0,
  count1,
  count2,
  count3,
  count4,
  count5,
  count6,
  autoPlayInterval,
  isAutoPlay,
  isCarouselAutoPlayMobile, // New prop for controlling mobile autoplay
}) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check the screen width and update the isMobile state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AliceCarousel
      items={items}
      autoPlay={true && (!isMobile || isCarouselAutoPlayMobile)} // Enable autoplay if isAutoPlay is true and it's not a mobile screen or isCarouselAutoPlayMobile is true
      autoPlayInterval={autoPlayInterval ? autoPlayInterval : 1000}
      infinite
      autoPlayDirection={autoPlayDirection}
      responsive={{
        0: { items: count0 || 3 },
        600: { items: count1 || 3 },
        900: { items: count2 || 3 },
        1024: { items: count3 || 3 },
        1100: { items: count4 || 3 },
        1200: { items: count5 || 5 },
        1400: { items: count6 || 6 },
      }}
    />
  );
};

export default MultiItemCarousel;
