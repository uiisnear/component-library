const TabsRoot = ({ children, ...props }) => (
  <Tabs.Root {...props}>{children}</Tabs.Root>
);

const tabsListClassname =
  "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground";

const TabsList = ({ className, children, ...props }) => (
  <Tabs.List
    ref="forwardedRef"
    className={className ?? tabsListClassname}
    {...props}
  >
    {children}
  </Tabs.List>
);

const tabsTriggerClassname =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow";

const TabsTrigger = ({ className, children, ...props }) => (
  <Tabs.Trigger
    ref="forwardedRef"
    className={className ?? tabsTriggerClassname}
    {...props}
  >
    {children}
  </Tabs.Trigger>
);

const tabsContentClassname =
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const TabsContent = ({ className, children, ...props }) => (
  <Tabs.Content
    ref="forwardedRef"
    className={className ?? tabsContentClassname}
    {...props}
  >
    {children}
  </Tabs.Content>
);

return {
  Tabs: TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListClassname,
  tabsTriggerClassname,
  tabsContentClassname,
};
