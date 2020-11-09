import React from "react";

const EventCategories = ({ item, setFilter }) => {
  return (
    <button
      onClick={() => {
        setFilter(item.title);
      }}
    >
      {item.title}
    </button>
  );
};

export default EventCategories;
