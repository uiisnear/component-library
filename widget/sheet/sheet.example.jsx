const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const { Input, inputClassname } = VM.require("uiisnear.near/widget/input");
const { Label, labelClassname } = VM.require("uiisnear.near/widget/label");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const {
  Sheet,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetConf,
} = VM.require("uiisnear.near/widget/sheet");

if (ClassnameConf == undefined) return "";

const [buttonOpen, setButtonOpen] = useState("");
const [inputCls, setInputCls] = useState("");
const [labelCls, setLabelCls] = useState("");

if (buttonOpen === "")
  return <ButtonConf output={setButtonOpen} variant="outline" />;

if (inputCls === "") {
  let className = `${inputClassname} col-span-3`;
  return <ClassnameConf output={setInputCls} className={className} />;
}
if (labelCls === "") {
  let className = `${labelClassname} text-right`;
  return <ClassnameConf output={setLabelCls} className={className} />;
}

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Sheet>
        <SheetTrigger>
          <Button className={buttonOpen}>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className={labelCls}>
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className={inputCls} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className={labelCls}>
                Username
              </Label>
              <Input id="username" value="@peduarte" className={inputCls} />
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </Tailwind>
);
