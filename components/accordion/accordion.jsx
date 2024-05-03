const AccordionRoot = ({ children, ...props }) => (
  <Accordion.Root {...props}>{children}</Accordion.Root>
);

const accordionItemClassname = "border-b";

const AccordionItem = ({ className, children, ...props }) => (
  <Accordion.Item
    ref="forwardedRef"
    className={className ?? accordionItemClassname}
    {...props}
  >
    {children}
  </Accordion.Item>
);

const accordionTriggerClassname =
  "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180";

const AccordionTrigger = ({ className, children, ...props }) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref="forwardedRef"
      className={className ?? accordionTriggerClassname}
      {...props}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Accordion.Trigger>
  </Accordion.Header>
);

const accordionContentClassname = "pb-4 pt-0";

const AccordionContent = ({ className, children, ...props }) => (
  <Accordion.Content
    ref="forwardedRef"
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={className ?? accordionContentClassname}>{children}</div>
  </Accordion.Content>
);

return {
  Accordion: AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionItemClassname,
  accordionTriggerClassname,
  accordionContentClassname,
};
