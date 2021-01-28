import React from 'react';
import styled from 'styled-components';
import Text from "@/components/Text";

const Li = styled(Text)`
    margin-bottom: 8px;
`;

const ListItem = ({ children }) => {
    return(
        <Li as="li">
            {children}
        </Li>
    )
}

export default ListItem;
