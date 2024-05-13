const TooltipProvider = ({ children, ...props }) => (
  <Tooltip.Provider {...props}>{children}</Tooltip.Provider>
);

const TooltipRoot = ({ children, ...props }) => (
  <Tooltip.Root {...props}>{children}</Tooltip.Root>
);

const TooltipTrigger = ({ children, ...props }) => (
  <Tooltip.Trigger {...props}>{children}</Tooltip.Trigger>
);

const tooltipContentClassname =
  "z-50 overflow-hidden rounded-md bg-uin-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const TooltipContent = ({ className, sideOffset, children, ...props }) => (
  <Tooltip.Content
    ref="forwardedRef"
    sideOffset={sideOffset ?? 4}
    className={className ?? tooltipContentClassname}
    {...props}
  >
    {children}
  </Tooltip.Content>
);

return {
  TooltipProvider,
  TooltipR: TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  tooltipContentClassname,
};
