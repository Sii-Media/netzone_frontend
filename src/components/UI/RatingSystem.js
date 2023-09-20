import { Rating } from "@mui/material";
import React from "react";

const RatingSystem = ({ value }) => {
  return (
    <div className={`pt-1`}>
      <Rating precision={1} value={value} readOnly size="small" />
    </div>
  );
};

export default RatingSystem;
