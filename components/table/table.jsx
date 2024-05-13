const tableClassname = "w-full caption-bottom text-sm";

const Table = ({ className, children, ...props }) => (
  <div className="relative w-full overflow-auto">
    <table
      ref="forwardedRef"
      className={className ?? tableClassname}
      {...props}
    >
      {children}
    </table>
  </div>
);

const tableHeaderClassname = "[&_tr]:border-b";

const TableHeader = ({ className, children, ...props }) => (
  <thead
    ref="forwardedRef"
    className={className ?? tableHeaderClassname}
    {...props}
  >
    {children}
  </thead>
);

const tableBodyClassname = "[&_tr:last-child]:border-0";

const TableBody = ({ className, children, ...props }) => (
  <tbody
    ref="forwardedRef"
    className={className ?? tableBodyClassname}
    {...props}
  >
    {children}
  </tbody>
);

const tableFooterClassname =
  "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0";

const TableFooter = ({ className, children, ...props }) => (
  <tfoot
    ref="forwardedRef"
    className={className ?? tableFooterClassname}
    {...props}
  >
    {children}
  </tfoot>
);

const tableRowClassname =
  "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted";

const TableRow = ({ className, children, ...props }) => (
  <tr ref="forwardedRef" className={className ?? tableRowClassname} {...props}>
    {children}
  </tr>
);

const tableHeadClassname =
  "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]";

const TableHead = ({ className, children, ...props }) => (
  <th ref="forwardedRef" className={className ?? tableHeadClassname} {...props}>
    {children}
  </th>
);

const tableCellClassname =
  "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]";

const TableCell = ({ className, ...props }) => (
  <td
    ref="forwardedRef"
    className={className ?? tableCellClassname}
    {...props}
  />
);

return {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  tableClassname,
  tableHeaderClassname,
  tableBodyClassname,
  tableFooterClassname,
  tableRowClassname,
  tableHeadClassname,
  tableCellClassname,
};
