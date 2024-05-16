const avatarClassname =
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full";

const AvatarRoot = ({ className, children, ...props }) => (
  <Avatar.Root
    ref="forwardedRef"
    className={className ?? avatarClassname}
    {...props}
  >
    {children}
  </Avatar.Root>
);

const avatarImageClassname = "aspect-square h-full w-full";

const AvatarImage = ({ className, children, ...props }) => (
  <Avatar.Image
    ref="forwardedRef"
    className={className ?? avatarImageClassname}
    {...props}
  />
);

const avatarFallbackClassname =
  "flex h-full w-full items-center justify-center rounded-full bg-muted";

const AvatarFallback = ({ className, children, ...props }) => (
  <Avatar.Fallback
    ref="forwardedRef"
    className={className ?? avatarFallbackClassname}
    {...props}
  >
    {children}
  </Avatar.Fallback>
);

return {
  Avatar: AvatarRoot,
  AvatarImage,
  AvatarFallback,
  avatarClassname,
  avatarImageClassname,
  avatarFallbackClassname,
};
