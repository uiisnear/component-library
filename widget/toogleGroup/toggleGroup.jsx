const toggleGroupRootClassname = "flex items-center justify-center gap-1";

const ToggleGroupRoot = ({ className, variant, size, children, ...props }) => (
  <ToggleGroup.Root
    ref="forwardedRef"
    className={className ?? toggleGroupRootClassname}
    {...props}
  >
    {children}
  </ToggleGroup.Root>
);

const ToggleGroupItem = ({ className, children, ...props }) => {
  return (
    <ToggleGroup.Item ref="forwardedRef" className={className} {...props}>
      {children}
    </ToggleGroup.Item>
  );
};

return { ToggleGroup: ToggleGroupRoot, ToggleGroupItem };
