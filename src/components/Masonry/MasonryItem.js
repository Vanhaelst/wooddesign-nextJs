import React from "react";
import ProjectCard from "../ProjectCard";
import Reveal from "../Reveal";

// Cards ease in as they scroll into view, staggered across each row of three.
const MasonryItem = ({ item, index = 0 }) => (
  <Reveal delay={(index % 3) * 120}>
    <ProjectCard item={item} />
  </Reveal>
);

export default MasonryItem;
