const skeletonClassname = "animate-pulse rounded-md bg-uin-primary/10";

const Skeleton = ({ className, children, ...props }) => (
  <div className={className ?? skeletonClassname} {...props}>
    {children}
  </div>
);

return { Skeleton, skeletonClassname };
