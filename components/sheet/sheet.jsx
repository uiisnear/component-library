const baseSheet =
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500";

const variantDefault =
  "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm";

const SheetConf = ({ className, side, output }) => {
  const srcDoc = `
    <script type="module"> 
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
      import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
      
      const sheetVariants = cva(
        "${baseSheet}",
        {
          variants: {
            side: {
              top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
              bottom:
                "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
              left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
              right:
                "${variantDefault}",
            },
          },
          defaultVariants: {
            side: "right",
          },
        }
      );

      window.addEventListener("message", ({ data }) => {
        try {
          event.source.postMessage(twMerge(clsx(sheetVariants(data))), "*");
        } catch (e) {}
      }, false);
    </script>
  `;

  return (
    <iframe
      className="d-none"
      srcDoc={srcDoc}
      message={{ className, side }}
      onMessage={output}
    />
  );
};

const SheetRoot = ({ children, ...props }) => (
  <Dialog.Root {...props}>{children}</Dialog.Root>
);

const SheetTrigger = ({ children, ...props }) => (
  <Dialog.Trigger {...props}>{children}</Dialog.Trigger>
);

const SheetClose = ({ children, ...props }) => (
  <Dialog.Close {...props}>{children}</Dialog.Close>
);

const sheetOverlayClassname =
  "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";

const SheetOverlay = ({ className, children, ...props }) => (
  <Dialog.Overlay
    ref="forwardedRef"
    className={className ?? sheetOverlayClassname}
    {...props}
  >
    {children}
  </Dialog.Overlay>
);

const sheetClassnameDefault = `${baseSheet} ${variantDefault}`;

const SheetContent = ({ className, children, ...props }) => (
  <>
    <SheetOverlay />
    <Dialog.Content
      ref="forwardedRef"
      className={className ?? sheetClassnameDefault}
      {...props}
    >
      {children}
      <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-uin-secondary">
        <i class="bi bi-x h-4 w-4"></i>
        <span className="sr-only">Close</span>
      </Dialog.Close>
    </Dialog.Content>
  </>
);

const sheetHeaderClassname = "flex flex-col space-y-2";

const SheetHeader = ({ className, children, ...props }) => (
  <div className={className ?? sheetHeaderClassname} {...props}>
    {children}
  </div>
);

const sheetFooterClassname =
  "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2";

const SheetFooter = ({ className, children, ...props }) => (
  <div className={className ?? sheetFooterClassname} {...props}>
    {children}
  </div>
);

const sheetTitleClassname = "text-lg font-semibold text-foreground";

const SheetTitle = ({ className, children, ...props }) => (
  <Dialog.Title
    ref="forwardedRef"
    className={className ?? sheetTitleClassname}
    {...props}
  >
    {children}
  </Dialog.Title>
);

const sheetDescriptionClassname = "text-sm text-muted-foreground";

const SheetDescription = ({ className, children, ...props }) => (
  <Dialog.Description
    ref="forwardedRef"
    className={className ?? sheetDescriptionClassname}
    {...props}
  >
    {children}
  </Dialog.Description>
);

return {
  Sheet: SheetRoot,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetConf,
  sheetOverlayClassname,
  sheetHeaderClassname,
  sheetFooterClassname,
  sheetTitleClassname,
  sheetDescriptionClassname,
};
