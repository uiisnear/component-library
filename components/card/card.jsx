const cardClassname = "rounded-xl border bg-card text-card-foreground shadow";

const Card = ({ className, children, ...props }) => (
  <div ref="forwardedRef" className={className ?? cardClassname} {...props}>
    {children}
  </div>
);

const cardHeaderClassname = "flex flex-col space-y-1.5 p-6";

const CardHeader = ({ className, children, ...props }) => (
  <div
    ref="forwardedRef"
    className={className ?? cardHeaderClassname}
    {...props}
  >
    {children}
  </div>
);

const cardTitleClassname = "font-semibold leading-none tracking-tight";

const CardTitle = ({ className, children, ...props }) => (
  <h3 ref="forwardedRef" className={className ?? cardTitleClassname} {...props}>
    {children}
  </h3>
);

const cardDescriptionClassname = "text-sm text-muted-foreground";

const CardDescription = ({ className, children, ...props }) => (
  <p
    ref="forwardedRef"
    className={className ?? cardDescriptionClassname}
    {...props}
  >
    {children}
  </p>
);

const cardContentClassname = "p-6 pt-0";

const CardContent = ({ className, children, ...props }) => (
  <div
    ref="forwardedRef"
    className={className ?? cardContentClassname}
    {...props}
  >
    {children}
  </div>
);

const cardFooterClassname = "flex items-center p-6 pt-0";

const CardFooter = ({ className, children, ...props }) => (
  <div
    ref="forwardedRef"
    className={className ?? cardFooterClassname}
    {...props}
  >
    {children}
  </div>
);

return {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardClassname,
  cardHeaderClassname,
  cardTitleClassname,
  cardDescriptionClassname,
  cardContentClassname,
  cardFooterClassname,
};
