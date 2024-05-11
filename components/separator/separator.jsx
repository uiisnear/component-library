const getSeparatorClassname = (orientation) => {
  orientation = orientation ?? "horizontal";

  return `shrink-0 bg-border ${
    orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
  }`;
};

const SeparatorRoot = ({
  className,
  orientation,
  decorative,
  children,
  ...props
}) => {
  orientation = orientation ?? "horizontal";

  return (
    <Separator.Root
      ref="forwardedRef"
      decorative={decorative ?? true}
      orientation={orientation}
      className={className ?? getSeparatorClassname(orientation)}
      {...props}
    >
      {children}
    </Separator.Root>
  );
};

return { Separator: SeparatorRoot, getSeparatorClassname };
