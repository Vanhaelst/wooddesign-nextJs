import React from "react";
import { handleViewport } from "react-in-viewport";
import styled from "styled-components";
import Link from "@/components/Link";
import Heading from "@/components/Heading";
import { TransitionSlide } from "../../transitions";
import { Paragraph } from "../../../publipirates-react";

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
`;

const Image = styled.div.withConfig({
  shouldForwardProp: (prop) => ["src", "alt", "children"].includes(prop),
})`
  background-image: url("${(props) => props.src}");
  background-size: cover;
  width: 100%;
  height: 400px;
`;

const Line = styled.div`
  border-left: 1px solid white;
  padding-left: 25px;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 50px;

  opacity: 0;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
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
          <div>
            <Link
              href={`/realisaties/${encodeURIComponent(item.slug)}`}
              type="hidden"
            >
              <Image src={item.images[0]?.url} alt={item.title}>
                <ImageOverlay>
                  <Line>
                    {item.title && (
                      <Heading level={3} color="#ffffff">
                        {item.title}
                      </Heading>
                    )}
                    {item.customer && (
                      <>
                        <Heading
                          level={4}
                          fontFamily="secondary"
                          fontWeight="regular"
                          color="#ffffff"
                          pt={7}
                        >
                          Klant
                        </Heading>
                        <SubTitle
                          level={4}
                          fontFamily="secondary"
                          fontWeight="light"
                          color="#ffffff"
                        >
                          {item.customer}
                        </SubTitle>
                      </>
                    )}
                  </Line>
                </ImageOverlay>
              </Image>
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
