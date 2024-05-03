const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");

const { Checkbox } = VM.require("uiisnear.near/widget/checkbox");
const { Label } = VM.require("uiisnear.near/widget/label");

if (Tailwind === undefined) return <></>;

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10 space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </Tailwind>
);
