const baseButton =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantDefault =
  "bg-uin-primary text-primary-foreground hover:opacity-90";

const sizeDefault = "h-10 px-4 py-2";

const ButtonConf = ({ output, className, variant, size }) => {
  const srcDoc = `
    <script type="module"> 
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
      import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
    
      const buttonVariants = cva(
        "${baseButton}",
        {
          variants: {
            variant: {
              default: "${variantDefault}",
              destructive:
                "bg-destructive text-destructive-foreground hover:opacity-90",
              outline:
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary hover:opacity-80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "${sizeDefault}",
              sm: "h-9 rounded-md px-3",
              lg: "h-11 rounded-md px-8",
              icon: "h-10 w-10",
            },
          },
          defaultVariants: {
            variant: "default",
            size: "default",
          },
        }
      )

      window.addEventListener("message", ({ data }) => {
        try {
           event.source.postMessage(twMerge(clsx(buttonVariants(data))), "*");
        } catch (e) {}
      }, false);
    </script>
  `;

  return (
    <iframe
      className="d-none"
      srcDoc={srcDoc}
      message={{ className, variant, size }}
      onMessage={output}
    />
  );
};

const buttonClassnameDefault = `${baseButton} ${variantDefault} ${sizeDefault}`;

const Button = ({ className, children, ...props }) => (
  <button
    className={className ?? buttonClassnameDefault}
    ref="forwardedRef"
    {...props}
  >
    {children}
  </button>
);

return { Button, ButtonConf };
