const MenubarMenu = ({ children, ...props }) => (
  <Menubar.Menu {...props}>{children}</Menubar.Menu>
);

const MenubarGroup = ({ children, ...props }) => (
  <Menubar.Group {...props}>{children}</Menubar.Group>
);

const MenubarSub = ({ children, ...props }) => (
  <Menubar.Sub {...props}>{children}</Menubar.Sub>
);

const MenubarRadioGroup = ({ children, ...props }) => (
  <Menubar.RadioGroup {...props}>{children}</Menubar.RadioGroup>
);

const menubarRootClassname =
  "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm";

const MenubarRoot = ({ className, children, ...props }) => (
  <Menubar.Root
    ref="forwardedRef"
    className={className ?? menubarRootClassname}
    {...props}
  >
    {children}
  </Menubar.Root>
);

const menubarTriggerClassname =
  "flex cursor-default select-none items-center justify-between rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground";

const MenubarTrigger = ({ className, children, ...props }) => (
  <Menubar.Trigger
    ref="forwardedRef"
    className={className ?? menubarTriggerClassname}
    {...props}
  >
    {children}
  </Menubar.Trigger>
);

const menubarSubTriggerClassname =
  "flex cursor-default select-none items-center justify-between rounded-sm py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground";

const MenubarSubTrigger = ({ className, inset, children, ...props }) => {
  let cls = className ?? menubarSubTriggerClassname;
  cls = inset != undefined && inset ? `${cls} pr-2 pl-8` : `${cls} px-2`;

  return (
    <Menubar.SubTrigger ref="forwardedRef" className={cls} {...props}>
      {children}
      <i class="bi bi-chevron-right ml-auto h-4 w-4"></i>
    </Menubar.SubTrigger>
  );
};

const menubarSubContentClassname =
  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const MenubarSubContent = ({ className, children, ...props }) => (
  <Menubar.SubContent
    ref="forwardedRef"
    className={className ?? menubarSubContentClassname}
    {...props}
  >
    {children}
  </Menubar.SubContent>
);

const menubarContentClassname =
  "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const MenubarContent = ({
  className,
  children,
  align,
  alignOffset,
  sideOffset,
  ...props
}) => (
  <Menubar.Content
    ref="forwardedRef"
    align={align ?? "start"}
    alignOffset={alignOffset ?? -4}
    sideOffset={sideOffset ?? 8}
    className={className ?? menubarContentClassname}
    {...props}
  >
    {children}
  </Menubar.Content>
);

const menubarItemClassname =
  "relative flex cursor-default select-none items-center justify-between rounded-sm py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

const MenubarItem = ({ className, children, inset, ...props }) => {
  let cls = className ?? menubarItemClassname;
  cls = inset != undefined && inset ? `${cls} pr-2 pl-8` : `${cls} px-2`;

  return (
    <Menubar.Item ref="forwardedRef" className={cls} {...props}>
      {children}
    </Menubar.Item>
  );
};

const menubarCheckboxItemClassname =
  "relative flex cursor-default select-none items-center justify-between rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

const MenubarCheckboxItem = ({ className, children, checked, ...props }) => (
  <Menubar.CheckboxItem
    ref="forwardedRef"
    className={className ?? menubarCheckboxItemClassname}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Menubar.ItemIndicator>
        <i class="bi bi-check h-4 w-4"></i>
      </Menubar.ItemIndicator>
    </span>
    {children}
  </Menubar.CheckboxItem>
);

const menubarRadioItemClassname =
  "relative flex cursor-default select-none items-center justify-between rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

const MenubarRadioItem = ({ className, children, ...props }) => (
  <Menubar.RadioItem
    ref="forwardedRef"
    className={className ?? menubarRadioItemClassname}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Menubar.ItemIndicator>
        <i class="bi bi-dot h-4 w-4 fill-current"></i>
      </Menubar.ItemIndicator>
    </span>
    {children}
  </Menubar.RadioItem>
);

const menubarLabelClassname = "py-1.5 text-sm font-semibold";

const MenubarLabel = ({ className, children, inset, ...props }) => {
  let cls = className ?? menubarLabelClassname;
  cls = inset != undefined && inset ? `${cls} pr-2 pl-8` : `${cls} px-2`;

  return (
    <Menubar.Label ref="forwardedRef" className={cls} {...props}>
      {children}
    </Menubar.Label>
  );
};

const menubarSeparatorClassname = "-mx-1 my-1 h-px bg-muted";

const MenubarSeparator = ({ className, children, ...props }) => (
  <Menubar.Separator
    ref="forwardedRef"
    className={className ?? menubarSeparatorClassname}
    {...props}
  >
    {children}
  </Menubar.Separator>
);

const menubarShortcutClassname =
  "ml-auto text-xs tracking-widest text-muted-foreground";

const MenubarShortcut = ({ className, children, ...props }) => {
  return (
    <span className={className ?? menubarShortcutClassname} {...props}>
      {children}
    </span>
  );
};

return {
  Menubar: MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
  menubarRootClassname,
  menubarTriggerClassname,
  menubarSubTriggerClassname,
  menubarSubContentClassname,
  menubarContentClassname,
  menubarItemClassname,
  menubarCheckboxItemClassname,
  menubarRadioItemClassname,
  menubarLabelClassname,
  menubarSeparatorClassname,
  menubarShortcutClassname,
};
