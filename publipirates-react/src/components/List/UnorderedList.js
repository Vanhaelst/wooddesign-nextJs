import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style-type: ${props => props.listStyleType};
    ${props => props.listStyleType === "none" && `
        padding-left: 0;
    `}
`;

const UnorderedList = ({ children, listStyleType = "none" }) => {
    return(
        <Ul listStyleType={listStyleType}>
            {children}
        </Ul>
    )
}

export default UnorderedList;
