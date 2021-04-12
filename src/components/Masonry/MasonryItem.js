import React from "react";
import { handleViewport } from "react-in-viewport";
import styled from "styled-components";
import Link from "@/components/Link";
import Heading from "@/components/Heading";
import { TransitionSlide } from "../../transitions";

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 12px;
`;

const Block = ({ item, enterCount, forwardedRef }) => {
  return (
    <TransitionSlide
      transition={enterCount}
      ref={forwardedRef}
      slideTo="up"
      fade
    >
      <div className="item" key={item.title}>
        <div className="content">
          <div style={{ padding: "25pox" }}>
            <Link
              href={`/realisaties/${encodeURIComponent(item.slug)}`}
              type="hidden"
            >
              <img
                src={item.images[0]?.url}
                alt={item.title}
                style={{ maxWidth: "100%" }}
              />
              {item.categories && (
                <SubTitle
                  level={4}
                  fontFamily="secondary"
                  fontWeight="regular"
                  color="#b3b3b3"
                >
                  {item.categories.map((category, index) => {
                    const isLast = index === item.categories.length - 1;
                    if (isLast) {
                      return category;
                    }
                    return `${category} - `;
                  })}
                </SubTitle>
              )}
              {item.title && (
                <Heading level={3} color="#464646">
                  {item.title}
                </Heading>
              )}
            </Link>
          </div>
        </div>
      </div>
    </TransitionSlide>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

const MasonryItem = ({ item }) => <ViewportBlock item={item} />;

export default MasonryItem;
