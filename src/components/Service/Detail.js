import React from 'react'
import styled from 'styled-components';
import Grid from "@/components/Grid";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";

const Row = styled.div`
    @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
        ${props => !props.isFirst && ` margin-top: -75px;`}
    }
    @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
        flex-direction: ${props => props.even ? 'row-reverse' : 'row' };
    }
`;

const ServiceDetail = ({ title, description, image, index }) => {
    const isEven = index % 2 === 0;
    const isFirst = index  === 1;

    console.log(isFirst, isEven);
    return (
        <Row as={Grid} row even={isEven} isFirst={isFirst}>
            <Grid item xs={12} sm={isEven ? { width: 6, push: 1 } : { width: 6 }} flex justifyContent={isFirst ? "flex-start" : "center"} flexDirection="column">
                <Heading level={3} textTransform="uppercase">{title}</Heading>
                <Paragraph mb={5}>
                    {description}
                </Paragraph>
            </Grid>
            <Grid item xs={12} sm={ isEven ? { width: 5 } : { width: 5, push: 1 }}>
                <Image
                    src={image}
                    objectFit
                    height="600px"
                />
            </Grid>
        </Row>
    );
}
export default ServiceDetail;