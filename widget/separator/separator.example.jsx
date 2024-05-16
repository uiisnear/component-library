const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const { Separator, getSeparatorClassname } = VM.require(
  "uiisnear.near/widget/separator"
);

const [separatorMargin, setSeparatorMargin] = useState("");
const [separatorVertical, setSeparatorVertical] = useState("");

if (separatorMargin === "") {
  let className = `${getSeparatorClassname()} my-2`;
  return <ClassnameConf output={setSeparatorMargin} className={className} />;
}
if (separatorVertical === "") {
  let className = `${getSeparatorClassname("vertical")}`;
  return <ClassnameConf output={setSeparatorVertical} className={className} />;
}

return (
  <Tailwind>
    <div className="flex flex-column mx-auto w-max pt-10">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className={separatorMargin} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator className={separatorVertical} orientation="vertical" />
        <div>Docs</div>
        <Separator className={separatorVertical} orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </Tailwind>
);
