const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Slider } = VM.require("uiisnear.near/widget/slider");

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-64 pt-10">
      <Slider defaultValue={[45]} max={100} step={1} />
    </div>
  </Tailwind>
);
