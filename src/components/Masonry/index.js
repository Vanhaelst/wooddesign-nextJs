import React from "react";
import styled from "styled-components";
import Masonry from 'react-masonry-css';
import Link from "@/components/Link";
import Heading from "@/components/Heading";

const Title = styled(Heading)`
  margin: 0;
  transition: all .2s ease;
  display: block;
`;

const SubTitle = styled(Heading)`
  margin: 0;
  letter-spacing: 2px;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 12px;
`;

const MyMasonry = styled(Masonry)`
    display: -webkit-box;
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;

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
    500: 1
};

const MasonryGrid = ({ items }) => {
    return (
        <MyMasonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {items.map(item => {
                return(
                    <div className="item" key={item.title}>
                        <div className="content">
                            <div style={{ padding: "25pox"}}>
                                <Link href={`/realisaties/${encodeURIComponent(item.slug)}`} type="hidden">
                                    <img src={item.images[0].url} alt={item.title} style={{ maxWidth: "100%" }} />
                                    {item.category && (<SubTitle level={4} fontFamily="secondary" fontWeight="regular" color="#b3b3b3">{item.category}</SubTitle>)}
                                    {item.title && (<Heading level={3} color="#464646">{item.title}</Heading>)}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </MyMasonry>
    )
}

export default MasonryGrid;
