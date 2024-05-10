const navigationMenuClassname =
  "relative z-10 flex max-w-max flex-1 items-center justify-center";

const NavigationMenuRoot = ({ className, children, ...props }) => (
  <NavigationMenu.Root
    ref="forwardedRef"
    className={className ?? navigationMenuClassname}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenu.Root>
);

const navigationMenuListClassname =
  "group flex flex-1 list-none items-center justify-center space-x-1";

const NavigationMenuList = ({ className, children, ...props }) => (
  <NavigationMenu.List
    ref="forwardedRef"
    className={className ?? navigationMenuListClassname}
    {...props}
  >
    {children}
  </NavigationMenu.List>
);

const NavigationMenuItem = ({ children, ...props }) => (
  <NavigationMenu.Item {...props}>{children}</NavigationMenu.Item>
);

const navigationMenuTriggerClassname =
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const NavigationMenuTrigger = ({ className, children, ...props }) => (
  <NavigationMenu.Trigger
    ref="forwardedRef"
    className={className ?? navigationMenuTriggerClassname}
    {...props}
  >
    {children}{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="currentColor"
      className="bi bi-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  </NavigationMenu.Trigger>
);

const navigationMenuContentClassname =
  "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ";

const NavigationMenuContent = ({ className, children, ...props }) => (
  <NavigationMenu.Content
    ref="forwardedRef"
    className={className ?? navigationMenuContentClassname}
    {...props}
  >
    {children}
  </NavigationMenu.Content>
);

const NavigationMenuLink = ({ children, ...props }) => (
  <NavigationMenu.Link {...props}>{children}</NavigationMenu.Link>
);

const navigationMenuViewportClassname =
  "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]";

const NavigationMenuViewport = ({ className, children, ...props }) => (
  <div className="absolute left-0 top-full flex justify-center">
    <NavigationMenu.Viewport
      className={className ?? navigationMenuViewportClassname}
      ref="forwardedRef"
      {...props}
    >
      {children}
    </NavigationMenu.Viewport>
  </div>
);

const navigationMenuIndicatorClassname =
  "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in";

const NavigationMenuIndicator = ({ className, ...props }) => (
  <NavigationMenu.Indicator
    ref="forwardedRef"
    className={className ?? navigationMenuIndicatorClassname}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenu.Indicator>
);

return {
  NavigationMenu: NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuClassname,
  navigationMenuListClassname,
  navigationMenuTriggerClassname,
  navigationMenuContentClassname,
  navigationMenuViewportClassname,
  navigationMenuIndicatorClassname,
};
