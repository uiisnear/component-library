const baseAlert =
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7";

const variantDefault = "bg-background text-foreground";

const AlertConf = ({ className, variant, output }) => {
  const srcDoc = `
    <script type="module"> 
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
      import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
      
      const alertVariants = cva(
        "${baseAlert}",
        {
          variants: {
            variant: {
              default: "${variantDefault}",
              destructive:
                "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
            },
          },
          defaultVariants: {
            variant: "default",
          },
        }
      )

      window.addEventListener("message", ({ data }) => {
        try {
          event.source.postMessage(twMerge(clsx(alertVariants(data))), "*");
        } catch (e) {}
      }, false);
    </script>
  `;

  return (
    <iframe
      className="d-none"
      srcDoc={srcDoc}
      message={{ className, variant }}
      onMessage={output}
    />
  );
};

const alertClassnameDefault = `${baseAlert} ${variantDefault}`;

const Alert = ({ className, children, ...props }) => (
  <div
    ref="forwardedRef"
    role="alert"
    className={className ?? alertClassnameDefault}
    {...props}
  >
    {children}
  </div>
);

const alertTitleClassname = "mb-1 font-medium leading-none tracking-tight";

const AlertTitle = ({ className, children, ...props }) => (
  <h5
    ref="forwardedRef"
    className={className ?? alertTitleClassname}
    {...props}
  >
    {children}
  </h5>
);

const alertDescriptionClassname = "text-sm [&_p]:leading-relaxed";

const AlertDescription = ({ className, children, ...props }) => (
  <div
    ref="forwardedRef"
    className={className ?? alertDescriptionClassname}
    {...props}
  >
    {children}
  </div>
);

return {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertConf,
  alertTitleClassname,
  alertDescriptionClassname,
};
