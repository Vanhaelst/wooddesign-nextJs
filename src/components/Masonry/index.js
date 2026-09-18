import React from "react";
import MasonryItem from "./MasonryItem";

const MasonryGrid = ({ items }) => (
  <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <MasonryItem item={item} />
    ))}
  </div>
);

export default MasonryGrid;
