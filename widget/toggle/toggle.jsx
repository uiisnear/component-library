const baseToggle =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground";

const variantDefault = "";

const sizeDefault = "h-9 px-3";

const ToggleConf = ({ className, variant, size, output }) => {
  const srcDoc = `
    <script type="module">
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
      import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
      
      const toggleVariants = cva(
        "${baseToggle}",
        {
          variants: {
            variant: {
              default: "${variantDefault}",
              outline:
                "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
              default: "${sizeDefault}",
              sm: "h-8 px-2",
              lg: "h-10 px-3",
            },
          },
          defaultVariants: {
            variant: "default",
            size: "default",
          },
        }
      );

      window.addEventListener("message", ({ data }) => {
        try {
          event.source.postMessage(twMerge(clsx(toggleVariants(data))), "*");
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

const toggleClassnameDefault = `${baseToggle} ${variantDefault} ${sizeDefault}`;

const ToggleRoot = ({ className, children, ...props }) => (
  <Toggle.Root
    ref="forwardedRef"
    className={className ?? toggleClassnameDefault}
    {...props}
  >
    {children}
  </Toggle.Root>
);

return { Toggle: ToggleRoot, ToggleConf };
