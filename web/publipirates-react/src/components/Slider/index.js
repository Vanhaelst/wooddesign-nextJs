import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "@/components/Image";
import Carousel, { consts } from "react-elastic-carousel";
import ChevronRight from "@/icons/ChevronRight";
import ChevronLeft from "@/icons/ChevronLeft";

const Pointer = styled.div`
  display: flex;
  justify-content: center;
`;

const settings = {
  breakPoints: [
    { width: 1, itemsToShow: 1, itemPadding: [10, 25] },
    { width: 550, itemsToShow: 2, itemPadding: [10, 25] },
    { width: 850, itemsToShow: 4, itemPadding: [10, 25] },
    { width: 1200, itemsToShow: 4, itemPadding: [10, 50] },
  ],
};

const pagination = () => <Fragment />;

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <ChevronLeft size="24px" />
    ) : (
      <ChevronRight size="24px" />
    );
  return (
    <Pointer onClick={onClick} disabled={isEdge}>
      {pointer}
    </Pointer>
  );
};

const Slider = ({ data }) => {
  return (
    <Carousel
      breakPoints={settings.breakPoints}
      renderArrow={myArrow}
      renderPagination={pagination}
      onChange={() => null}
    >
      {data &&
        data.map((item) => {
          return (
            <div style={{ margin: "10px" }} key={item.id}>
              <Image
                src={item.media_url}
                alt={`Instagram feed ${item.username} - ${item.id}`}
              />
            </div>
          );
        })}
    </Carousel>
  );
};

export default Slider;
