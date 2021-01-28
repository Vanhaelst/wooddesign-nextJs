import React from 'react';
import styled from 'styled-components';
import Box from "@/components/Box";

const ContentWrapper = styled(Box)`
    margin-top: 80px;
    margin-bottom: 80px;
    @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}){
        margin-top: 160px;
        margin-bottom: 160px;
    }
`;

export default ContentWrapper;
