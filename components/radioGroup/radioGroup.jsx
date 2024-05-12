const radioGroupClassname = "grid gap-2";

const RadioGroupRoot = ({ className, children, ...props }) => (
  <RadioGroup.Root
    className={className ?? radioGroupClassname}
    {...props}
    ref="forwardedRef"
  >
    {children}
  </RadioGroup.Root>
);

const radioGroupItemClassname =
  "aspect-square h-4 w-4 rounded-full border-px border-uin-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

const RadioGroupItem = ({ className, ...props }) => (
  <RadioGroup.Item
    ref="forwardedRef"
    className={className ?? radioGroupItemClassname}
    {...props}
  >
    <RadioGroup.Indicator className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="fill-primary"
        className="bi bi-check"
        viewBox="0 0 16 16"
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
      </svg>
    </RadioGroup.Indicator>
  </RadioGroup.Item>
);

return {
  RadioGroup: RadioGroupRoot,
  RadioGroupItem,
  radioGroupClassname,
  radioGroupItemClassname,
};
