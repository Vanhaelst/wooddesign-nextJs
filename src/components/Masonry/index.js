import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import MasonryItem from "./MasonryItem";

const MyMasonry = styled(Masonry)`
  display: -webkit-box;
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
  transition: all 1s;

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const MasonryGrid = ({ items }) => {
  return (
    <MyMasonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item) => (
        <MasonryItem item={item} />
      ))}
    </MyMasonry>
  );
};

export default MasonryGrid;
