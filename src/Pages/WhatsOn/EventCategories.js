import React from "react";
import Button from "../../Components/Button";

const EventCategories = ({ item, setFilter }) => {
  return (
    <Button
      onClick={() => {
        setFilter(item);
      }}
      text={item}
    >
      {item}
    </Button>
  );
};

export default EventCategories;
