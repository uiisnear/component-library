const PopoverRoot = ({ children, ...props }) => (
  <Popover.Root {...props}>{children}</Popover.Root>
);

const PopoverTrigger = ({ children, ...props }) => (
  <Popover.Trigger {...props}>{children}</Popover.Trigger>
);

const PopoverAnchor = ({ children, ...props }) => (
  <Popover.Anchor {...props}>{children}</Popover.Anchor>
);

const popoverContentClassname =
  "z-50 w-72 rounded-md border bg-popover p-3 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const PopoverContent = ({
  className,
  children,
  align,
  sideOffset,
  ...props
}) => (
  <Popover.Content
    ref="forwardedRef"
    align={align ?? "center"}
    sideOffset={sideOffset ?? 4}
    className={className ?? popoverContentClassname}
    {...props}
  >
    {children}
  </Popover.Content>
);

return {
  Popover: PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  popoverContentClassname,
};
