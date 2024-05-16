const SelectRoot = ({ children, ...props }) => (
  <Select.Root {...props}>{children}</Select.Root>
);

const SelectGroup = ({ children, ...props }) => (
  <Select.Group {...props}>{children}</Select.Group>
);

const SelectValue = ({ children, ...props }) => <Select.Value {...props} />;

const selectTriggerClassname =
  "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1";

const SelectTrigger = ({ className, children, ...props }) => (
  <Select.Trigger
    ref="forwardedRef"
    className={className ?? selectTriggerClassname}
    {...props}
  >
    {children}
    <Select.Icon>
      <i class="bi bi-arrow-down-up h-4 w-4 opacity-50"></i>
    </Select.Icon>
  </Select.Trigger>
);

const selectScrollUpButtonClassname =
  "flex cursor-default items-center justify-center py-1";

const SelectScrollUpButton = ({ className, children, ...props }) => (
  <Select.ScrollUpButton
    ref="forwardedRef"
    className={className ?? selectScrollUpButtonClassname}
    {...props}
  >
    <i class="bi bi-chevron-up"></i>
  </Select.ScrollUpButton>
);

const selectScrollDownButtonClassname =
  "flex cursor-default items-center justify-center py-1";

const SelectScrollDownButton = ({ className, children, ...props }) => (
  <Select.ScrollDownButton
    ref="forwardedRef"
    className={className ?? selectScrollDownButtonClassname}
    {...props}
  >
    <i class="bi bi-chevron-down"></i>
  </Select.ScrollDownButton>
);

const getViewportClassname = (position) => {
  position = position ?? "popper";

  let popper =
    position === "popper"
      ? "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      : "";

  return `p-1 ${popper}`;
};

const getContentClassname = (position) => {
  position = position ?? "popper";

  let popper =
    position === "popper"
      ? "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      : "";

  return `relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${popper}`;
};

const SelectContent = ({ className, children, position, ...props }) => {
  position = position ?? "popper";

  return (
    <Select.Content
      ref="forwardedRef"
      className={className ?? getContentClassname(position)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Select.Viewport className={getViewportClassname(position)}>
        {children}
      </Select.Viewport>
      <SelectScrollDownButton />
    </Select.Content>
  );
};

const selectLabelClassname = "px-2 py-1.5 text-sm font-semibold";

const SelectLabel = ({ className, children, ...props }) => (
  <Select.Label
    ref="forwardedRef"
    className={className ?? selectLabelClassname}
    {...props}
  >
    {children}
  </Select.Label>
);

const selectItemClassname =
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

const SelectItem = ({ className, children, ...props }) => (
  <Select.Item
    ref="forwardedRef"
    className={className ?? selectItemClassname}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <Select.ItemIndicator>
        <i class="bi bi-check h-4 w-4"></i>
      </Select.ItemIndicator>
    </span>
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
);

const selectSeparatorClassname = "-mx-1 my-1 h-px bg-muted";

const SelectSeparator = ({ className, children, ...props }) => (
  <Select.Separator
    ref="forwardedRef"
    className={className ?? selectSeparatorClassname}
    {...props}
  >
    {children}
  </Select.Separator>
);

return {
  Select: SelectRoot,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  selectTriggerClassname,
  selectScrollUpButtonClassname,
  selectScrollDownButtonClassname,
  getContentClassname,
  selectLabelClassname,
  selectItemClassname,
  selectSeparatorClassname,
};
