import styled from "styled-components";
import PropTypes from "prop-types";
import getMargin from "../../utils/margin";
import getPadding from "../../utils/padding";
import flex from "../../utils/flex";

const width = (data) => {
  let width = data;

  if (typeof data === "object") {
    width = data.width;
  }

  const foo = (width / 12) * 100;
  return `${foo}%`;
};

const push = (push) => {
  const foo = (push / 12) * 100;
  return `${foo}%`;
};

const pull = (pull) => {
  const foo = (pull / 12) * 100;
  return `-${foo}%`;
};

const Grid = styled.div`
  ${(props) =>
    props.backgroundColor &&
    `
        background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.container &&
    `
        margin: 0 auto;
        max-width: ${props.theme.grid.wrapFluid};
        width: ${props.theme.grid.wrapFluid};
        @media screen and (min-width: ${props.theme.grid.breakpointMedium}px){
            ${
              props.fluid
                ? `
                max-width: ${props.theme.grid.wrapFluid};
            `
                : `
                max-width: ${props.theme.grid.wrapStatic}px; 
            `
            }
        }
    `}
    
    ${(props) =>
    props.row &&
    `
        width: calc(100% + (${props.theme.grid.gutter} * 2));
        margin: 0 -${props.theme.grid.gutter};
        display: flex;
        flex-wrap: wrap;
    `}
    
    ${(props) =>
    props.item &&
    `
        padding: 0 ${props.theme.grid.gutter};
        margin: 0;
        width: 100%;
        max-width: ${props.theme.grid.wrapStatic}px;
    `}
    
    ${(props) =>
    props.xs &&
    `
        width: ${width(props.xs)};
    `}
    
    ${(props) =>
    props.sm &&
    `
        @media screen and (min-width: ${props.theme.grid.breakpointSmall}px) {
            width: ${width(props.sm)};
            ${
              props.sm.push &&
              `
                margin-left: ${push(props.sm.push)};
            `
            }
            ${
              props.sm.pull &&
              `
                margin-left: ${pull(props.sm.pull)};
            `
            }
        }
    `}
        
    ${(props) =>
    props.md &&
    `
        @media screen and (min-width: ${props.theme.grid.breakpointMedium}px) {
            width: ${width(props.md)};
            ${
              props.md.push &&
              `
                margin-left: ${push(props.md.push)};
            `
            }
            ${
              props.md.pull &&
              `
                margin-left: ${pull(props.md.pull)};
            `
            }
        }
    `}
     
     ${(props) =>
    props.lg &&
    `
        @media screen and (min-width: ${props.theme.grid.breakpointLarge}px) {
            width: ${width(props.lg)};
            ${
              props.lg.push &&
              `
                margin-left: ${push(props.lg.push)};
            `
            }
             ${
               props.lg.pull &&
               `
                margin-left: ${pull(props.lg.pull)};
            `
             }
        }
    `}
    ${(props) =>
    props.xl &&
    `
        @media screen and (min-width: ${props.theme.grid.breakpointXLarge}px) {
            width: ${width(props.xl)};
            ${
              props.xl.push &&
              `
                margin-left: ${push(props.xl.push)};
            `
            }
            ${
              props.xl.pull &&
              `
                margin-left: ${pull(props.xl.pull)};
            `
            }
        }
    `}    
    
    ${flex}
    ${getMargin}
    ${getPadding}
`;

Grid.propTypes = {
  backgroundColor: PropTypes.string,
  container: PropTypes.bool,
  row: PropTypes.bool,
  item: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

export default Grid;
