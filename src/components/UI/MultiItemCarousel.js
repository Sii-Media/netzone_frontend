import React from "react";
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
}) => {
  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={1000}
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
