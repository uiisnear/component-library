const checkboxClassname =
  "peer h-4 w-4 shrink-0 rounded-sm border border-uin-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-uin-primary data-[state=checked]:text-primary-foreground";

const CheckboxRoot = ({ className, ...props }) => (
  <Checkbox.Root
    ref="forwardedRef"
    className={className ?? checkboxClassname}
    {...props}
  >
    <Checkbox.Indicator className="flex items-center justify-center text-current">
      <i class="bi bi-check-square h-4 w-4"></i>
    </Checkbox.Indicator>
  </Checkbox.Root>
);

return { Checkbox: CheckboxRoot, checkboxClassname };
