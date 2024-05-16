const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Label } = VM.require("uiisnear.near/widget/label");
const { Input, inputClassname } = VM.require("uiisnear.near/widget/input");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  popoverContentClassname,
} = VM.require("uiisnear.near/widget/popover");

if (ClassnameConf == undefined) return "";

const [buttonOpen, setButtonOpen] = useState("");
const [popoverContent, setPopoverContent] = useState("");
const [inputCls, setInputCls] = useState("");

if (buttonOpen === "")
  return <ButtonConf output={setButtonOpen} variant="outline" />;

if (popoverContent === "") {
  let className = `${popoverContentClassname} w-80`;
  return <ClassnameConf output={setPopoverContent} className={className} />;
}
if (inputCls === "") {
  let className = `${inputClassname} col-span-2 h-8`;
  return <ClassnameConf output={setInputCls} className={className} />;
}

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Popover>
        <PopoverTrigger>
          <Button className={buttonOpen}>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className={popoverContent}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" className={inputCls} />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className={inputCls}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" className={inputCls} />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className={inputCls}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </Tailwind>
);
