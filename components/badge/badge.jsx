const baseBadge =
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

const variantDefault =
  "border-transparent bg-uin-primary text-primary-foreground shadow hover:opacity-80";

const BadgeConf = ({ className, variant, output }) => {
  const srcDoc = `
    <script type="module">
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
      import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
      
      const badgeVariants = cva(
        "${baseBadge}",
        {
          variants: {
            variant: {
              default:
                "${variantDefault}",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:opacity-80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground shadow hover:opacity-80",
              outline: "text-foreground",
            },
          },
          defaultVariants: {
            variant: "default",
          },
        }
      )
  
      window.addEventListener("message", ({ data }) => {
        try {
          event.source.postMessage(twMerge(clsx(badgeVariants(data))), "*");
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

const badgeClassnameDefault = `${baseBadge} ${variantDefault}`;

const Badge = ({ className, children, ...props }) => (
  <div className={className ?? badgeClassnameDefault} {...props}>
    {children}
  </div>
);

return { Badge, BadgeConf };
