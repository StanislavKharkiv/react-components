export const Flex = (props) => {
  const { children, justify, gap, wrap } = props;
  const flexStyle = {
    display: "flex",
    justifyContent: justify,
    gap: `${gap}px`,
    flexWrap: wrap ? "wrap" : "nowrap",
  };
  return <div style={flexStyle}>{children}</div>;
};
