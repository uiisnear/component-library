const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Label, labelClassname } = VM.require("uiisnear.near/widget/label");
const { Input, inputClassname } = VM.require("uiisnear.near/widget/input");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  dialogContentClassname,
} = VM.require("uiisnear.near/widget/dialog");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");

if (Tailwind == undefined) return "";
if (ClassnameConf == undefined) return "";

const [buttonEdit, setButtonEdit] = useState("");
const [labelCls, setLabelCls] = useState("");
const [inputCls, setInputCls] = useState("");
const [dialogContentCls, setDialogContentCls] = useState("");

if (buttonEdit === "")
  return <ButtonConf output={setButtonEdit} variant="outline" />;

if (labelCls === "") {
  let className = `${labelClassname} text-right`;
  return <ClassnameConf output={setLabelCls} className={className} />;
}
if (dialogContentCls === "") {
  let className = `${dialogContentClassname} sm:max-w-[425px]`;
  return <ClassnameConf output={setDialogContentCls} className={className} />;
}
if (inputCls === "") {
  let className = `${inputClassname} col-span-3`;
  return <ClassnameConf output={setInputCls} className={className} />;
}

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Dialog>
        <DialogTrigger>
          <Button className={buttonEdit}>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className={dialogContentCls}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </Tailwind>
);
