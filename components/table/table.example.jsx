const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  tableHeadClassname,
  tableCellClassname,
} = VM.require("uiisnear.near/widget/table");

if (Tailwind == undefined) return "";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

if (ClassnameConf == undefined) return "";

const [tableHead, setTableHead] = useState("");
const [tableHeadRight, setTableHeadRight] = useState("");
const [tableCellRight, setTableCellRight] = useState("");
const [tableCellMedium, setTableCellMedium] = useState("");

if (tableHead === "") {
  let className = `${tableHeadClassname} w-24`;
  return <ClassnameConf output={setTableHead} className={className} />;
}

if (tableHeadRight === "") {
  let className = `${tableHeadClassname} text-right`;
  return <ClassnameConf output={setTableHeadRight} className={className} />;
}

if (tableCellRight === "") {
  let className = `${tableCellClassname} text-right`;
  return <ClassnameConf output={setTableCellRight} className={className} />;
}

if (tableCellMedium === "") {
  let className = `${tableCellClassname} font-medium`;
  return <ClassnameConf output={setTableCellMedium} className={className} />;
}

return (
  <Tailwind>
    <div className="mx-auto max-w-2xl px-10 pt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={tableHead}>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className={tableHeadRight}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(
            ({ invoice, paymentStatus, totalAmount, paymentMethod }) => (
              <TableRow key={invoice}>
                <TableCell className={tableCellMedium}>{invoice}</TableCell>
                <TableCell>{paymentStatus}</TableCell>
                <TableCell>{paymentMethod}</TableCell>
                <TableCell className={tableCellRight}>{totalAmount}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className={tableCellRight}>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </Tailwind>
);
