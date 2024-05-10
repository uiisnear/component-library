const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Label } = VM.require("uiisnear.near/widget/label");
const { Switch } = VM.require("uiisnear.near/widget/switch");

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex items-center space-x-2 mx-auto pt-10 w-max">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  </Tailwind>
);
