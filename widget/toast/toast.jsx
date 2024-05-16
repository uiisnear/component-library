const baseToast =
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full";

const variantDefault = "border bg-background text-foreground";

const ToastConf = ({ className, variant, output }) => {
  const srcDoc = `
      <script type="module"> 
        import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
        import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
        import { cva } from 'https://cdn.jsdelivr.net/npm/class-variance-authority@0.7.0/+esm'
        
        const toastVariants = cva(
          "${baseToast}",
          {
            variants: {
              variant: {
                default: "${variantDefault}",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: {
              variant: "default",
            },
          }
        )
  
        window.addEventListener("message", ({ data }) => {
          try {
            event.source.postMessage(twMerge(clsx(toastVariants(data))), "*");
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

const ToastProvider = ({ children, ...props }) => (
  <Toast.Provider ref="forwardedRef" {...props}>
    {children}
  </Toast.Provider>
);

const toastViewportClassname =
  "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]";

const ToastViewport = ({ className, children, ...props }) => (
  <Toast.Viewport
    ref="forwardedRef"
    className={className ?? toastViewportClassname}
    {...props}
  >
    {children}
  </Toast.Viewport>
);

const toastClassnameDefault = `${baseToast} ${variantDefault}`;

const ToastRoot = ({ className, children, ...props }) => (
  <Toast.Root
    ref="forwardedRef"
    className={className ?? toastClassnameDefault}
    {...props}
  >
    {children}
  </Toast.Root>
);

const toastActionClassname =
  "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-uin-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive";

const ToastAction = ({ className, children, ...props }) => (
  <Toast.Action
    ref="forwardedRef"
    className={className ?? toastActionClassname}
    {...props}
  >
    {children}
  </Toast.Action>
);

const toastCloseClassname =
  "absolute right-1 top-1 rounded-md p-1 text-foreground opacity-10 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600";

const ToastClose = ({ className, ...props }) => (
  <Toast.Close
    ref="forwardedRef"
    className={className ?? toastCloseClassname}
    toast-close=""
    {...props}
  >
    <i class="bi bi-x h-4 w-4"></i>
  </Toast.Close>
);

const toastTitleClassname = "text-sm font-semibold [&+div]:text-xs";

const ToastTitle = ({ className, children, ...props }) => (
  <Toast.Title
    ref="forwardedRef"
    className={className ?? toastTitleClassname}
    {...props}
  >
    {children}
  </Toast.Title>
);

const toastDescriptionClassname = "text-sm opacity-90";

const ToastDescription = ({ className, children, ...props }) => (
  <Toast.Description
    ref="forwardedRef"
    className={className ?? toastDescriptionClassname}
    {...props}
  >
    {children}
  </Toast.Description>
);

const Toaster = ({ toasts, className }) => (
  <ToastProvider>
    {toasts?.map(({ id, title, description, action, ...props }) => (
      <ToastRoot key={id} className={className} {...props}>
        <div className="grid gap-1">
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        {action}
        <ToastClose />
      </ToastRoot>
    ))}
    <ToastViewport />
  </ToastProvider>
);

return {
  ToastProvider,
  ToastViewport,
  ToastConf,
  Toast: ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Toaster,
  toastViewportClassname,
  toastActionClassname,
  toastCloseClassname,
  toastTitleClassname,
  toastDescriptionClassname,
};
