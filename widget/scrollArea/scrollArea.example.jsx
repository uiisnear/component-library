const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const { Separator, getSeparatorClassname } = VM.require(
  "uiisnear.near/widget/separator"
);
const { ScrollArea, ScrollBar, scrollAreaClassName } = VM.require(
  "uiisnear.near/widget/scrollArea"
);

if (Tailwind == undefined) return "";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
const [separatorMargin, setSeparatorMargin] = useState("");
const [scrollArea, setScrollArea] = useState("");

if (scrollArea === "") {
  let className = `${scrollAreaClassName} h-72 w-48 rounded-md border`;
  return <ClassnameConf output={setScrollArea} className={className} />;
}
if (separatorMargin === "") {
  let className = `${getSeparatorClassname()} my-2`;
  return <ClassnameConf output={setSeparatorMargin} className={className} />;
}

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <ScrollArea className={scrollArea}>
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                {tag}
              </div>
              <Separator className={separatorMargin} />
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  </Tailwind>
);
