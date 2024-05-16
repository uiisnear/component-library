const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ButtonConf } = VM.require("uiisnear.near/widget/button");
const {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  paginationPreviousClassname,
  paginationNextClassname,
} = VM.require("uiisnear.near/widget/pagination");

const [paginationLink, setPaginationLink] = useState("");
const [paginationLinkPrevious, setPaginationLinkPrevious] = useState("");
const [paginationLinkNext, setPaginationLinkNext] = useState("");
const [paginationLinkActive, setPaginationLinkActive] = useState("");

if (paginationLink === "")
  return <ButtonConf output={setPaginationLink} variant="ghost" size="icon" />;
if (paginationLinkPrevious === "")
  return (
    <ButtonConf
      output={setPaginationLinkPrevious}
      variant="ghost"
      size="default"
      className={paginationPreviousClassname}
    />
  );
if (paginationLinkNext === "")
  return (
    <ButtonConf
      output={setPaginationLinkNext}
      variant="ghost"
      size="default"
      className={paginationNextClassname}
    />
  );
if (paginationLinkActive === "")
  return (
    <ButtonConf
      output={setPaginationLinkActive}
      variant="outline"
      size="icon"
    />
  );

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className={paginationLinkPrevious} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={paginationLink} href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={paginationLinkActive} href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={paginationLink} href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className={paginationLinkNext} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </Tailwind>
);
