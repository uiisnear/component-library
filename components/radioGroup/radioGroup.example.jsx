const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Label } = VM.require("uiisnear.near/widget/label");
const { RadioGroup, RadioGroupItem } = VM.require(
  "uiisnear.near/widget/radioGroup"
);

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  </Tailwind>
);
