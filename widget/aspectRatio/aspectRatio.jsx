const AspectRatioRoot = ({ children, ...props }) => (
  <AspectRatio.Root {...props}>{children}</AspectRatio.Root>
);

return { AspectRatio: AspectRatioRoot };
