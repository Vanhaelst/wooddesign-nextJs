import React from "react";
import MasonryItem from "./MasonryItem";

const MasonryGrid = ({ items }) => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
    {items.map((item, index) => (
      <MasonryItem key={item.slug} item={item} index={index} />
    ))}
  </div>
);

export default MasonryGrid;
