const CollapsibleRoot = ({ children, ...props }) => (
  <Collapsible.Root {...props}>{children}</Collapsible.Root>
);

const CollapsibleTrigger = ({ children, ...props }) => (
  <Collapsible.CollapsibleTrigger {...props}>
    {children}
  </Collapsible.CollapsibleTrigger>
);

const CollapsibleContent = ({ children, ...props }) => (
  <Collapsible.CollapsibleContent {...props}>
    {children}
  </Collapsible.CollapsibleContent>
);

return { Collapsible: CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };
