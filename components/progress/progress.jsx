const progressClassname =
  "relative h-2 w-full overflow-hidden rounded-full bg-uin-primary/20";

const ProgressRoot = ({ className, value, children, ...props }) => (
  <Progress.Root
    ref="forwardedRef"
    className={className ?? progressClassname}
    {...props}
  >
    <Progress.Indicator
      className="h-full w-full flex-1 bg-uin-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      {children}
    </Progress.Indicator>
  </Progress.Root>
);

return { Progress: ProgressRoot, progressClassname };
