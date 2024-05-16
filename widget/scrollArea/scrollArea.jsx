const scrollAreaClassName = "relative overflow-hidden";

const ScrollAreaRoot = ({ className, children, ...props }) => (
  <ScrollArea.Root
    ref="forwardedRef"
    className={className ?? scrollAreaClassName}
    {...props}
  >
    <ScrollArea.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollArea.Viewport>
    <ScrollBar />
    <ScrollArea.Corner />
  </ScrollArea.Root>
);

const getScrollBarClassname = (orientation) => {
  orientation = orientation ?? "vertical";

  let verticalClassname =
    orientation === "vertical"
      ? "h-full w-2.5 border-l border-l-transparent p-[1px]"
      : "";

  let horizontalClassname =
    orientation === "horizontal"
      ? "h-2.5 flex-col border-t border-t-transparent p-[1px]"
      : "";

  return `flex touch-none select-none transition-colors ${verticalClassname} ${horizontalClassname}`;
};

const ScrollBar = ({ className, orientation, ...props }) => {
  orientation = orientation ?? "vertical";

  return (
    <ScrollArea.ScrollAreaScrollbar
      ref="forwardedRef"
      orientation={orientation}
      className={className ?? getScrollBarClassname(orientation)}
      {...props}
    >
      <ScrollArea.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollArea.ScrollAreaScrollbar>
  );
};

return {
  ScrollArea: ScrollAreaRoot,
  ScrollBar,
  scrollAreaClassName,
  getScrollBarClassname,
};
