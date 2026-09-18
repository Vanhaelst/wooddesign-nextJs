// Tailwind class lookups for the flexbox props accepted by Box and Grid.
const ALIGN_CONTENT = {
  center: "content-center",
  "flex-start": "content-start",
  "flex-end": "content-end",
  "space-around": "content-around",
  "space-between": "content-between",
  "space-evenly": "content-evenly",
  stretch: "content-stretch",
};

const ALIGN_ITEMS = {
  baseline: "items-baseline",
  center: "items-center",
  "flex-start": "items-start",
  "flex-end": "items-end",
  stretch: "items-stretch",
};

const ALIGN_SELF = {
  auto: "self-auto",
  center: "self-center",
  "flex-start": "self-start",
  "flex-end": "self-end",
  stretch: "self-stretch",
};

const FLEX_DIRECTION = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
};

const FLEX_WRAP = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const JUSTIFY_CONTENT = {
  center: "justify-center",
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  "space-around": "justify-around",
  "space-between": "justify-between",
  "space-evenly": "justify-evenly",
  stretch: "justify-stretch",
};

const FLEX_PROPS = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "flexDirection",
  "flexWrap",
  "justifyContent",
];

// Splits the flex props off `props`. Returns [classes, remainingProps].
export const flexProps = (props) => {
  const rest = { ...props };
  FLEX_PROPS.forEach((key) => delete rest[key]);

  const classes = [
    ALIGN_CONTENT[props.alignContent],
    ALIGN_ITEMS[props.alignItems],
    ALIGN_SELF[props.alignSelf],
    FLEX_DIRECTION[props.flexDirection],
    FLEX_WRAP[props.flexWrap],
    JUSTIFY_CONTENT[props.justifyContent],
  ];

  return [classes.filter(Boolean).join(" "), rest];
};

export { FLEX_DIRECTION };
