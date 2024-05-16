const paginationClassname = "mx-auto flex w-full justify-center";

const Pagination = ({ className, children, ...props }) => (
  <div
    role="navigation"
    aria-label="pagination"
    className={className ?? paginationClassname}
    {...props}
  >
    {children}
  </div>
);

const paginationContentClassname = "flex flex-row items-center gap-1";

const PaginationContent = ({ className, children, ...props }) => (
  <ul
    ref="forwardedRef"
    className={className ?? paginationContentClassname}
    {...props}
  >
    {children}
  </ul>
);

const PaginationItem = ({ className, children, ...props }) => (
  <li ref="forwardedRef" className={className} {...props}>
    {children}
  </li>
);

const PaginationLink = ({ className, children, isActive, ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={className}
    {...props}
  >
    {children}
  </a>
);

const paginationPreviousClassname = "gap-1 pl-2.5";

const PaginationPrevious = ({ className, title, children, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={className ?? paginationPreviousClassname}
    {...props}
  >
    <i class="bi bi-chevron-left h-4 w-4"></i>
    <span>{title ?? "Previous"}</span>
  </PaginationLink>
);

const paginationNextClassname = "gap-1 pr-2.5";

const PaginationNext = ({ className, title, children, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    className={className ?? paginationNextClassname}
    {...props}
  >
    <span>{title ?? "Next"}</span>
    <i class="bi bi-chevron-right h-4 w-4"></i>
  </PaginationLink>
);

const paginationEllipsisClassname = "flex h-9 w-9 items-center justify-center";

const PaginationEllipsis = ({ className, title, ...props }) => (
  <span
    aria-hidden
    className={className ?? paginationEllipsisClassname}
    {...props}
  >
    <i class="bi bi-three-dots h-4 w-4"></i>
    <span className="sr-only">{title ?? "More pages"}</span>
  </span>
);

return {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  paginationClassname,
  paginationContentClassname,
  paginationPreviousClassname,
  paginationNextClassname,
  paginationEllipsisClassname,
};
