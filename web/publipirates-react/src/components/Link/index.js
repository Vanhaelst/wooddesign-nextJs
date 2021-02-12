import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../utils/color";
import fontWeight from "../../utils/fontWeight";
import textDecoration from "../../utils/textDecoration";
import textTransform from "../../utils/textTransform";
import fontFamily from "../../utils/fontFamily";

const Link = styled.a`
  font-size: inherit;
  font-weight: inherit;

  color: ${(props) => props.theme.colors.link.main};
  &:hover {
    color: ${(props) => props.theme.colors.link.dark};
    background-color: transparent;
    cursor: pointer;
    svg path{
      fill: ${(props) => props.theme.colors.primary.dark};
    }
  }

  ${(props) =>
    props.type === "branded" &&
    `
        color: ${props.theme.colors.primary.main};
        &:hover {
            color: ${props.theme.colors.primary.dark};
            background-color: transparent;
        }
    `}

  ${(props) =>
    props.type === "hidden" &&
    `
        color: inherit;
        text-decoration: none;
        &:hover {
            color: ${props.theme.colors.primary.dark};
            background-color: transparent;
        }
    `}
    
    ${(props) =>
    props.type === "disabled" &&
    `
        color:  ${props.theme.colors.grey[30]};
        &:hover {
            color: ${props.theme.colors.grey[30]};
            background-color: transparent;
        }
    `}
    
    ${color}
    ${fontWeight}
    ${fontFamily}
    ${textDecoration}
    ${textTransform}
`;

Link.propTypes = {
  type: PropTypes.oneOf(["branded", "hidden", "disabled"]),
};

export default Link;
