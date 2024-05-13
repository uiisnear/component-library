const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
 
const { Toggle } = VM.require("uiisnear.near/widget/toggle");
 
if (Tailwind == undefined) return "";
 
return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10 space-x-2">
      <Toggle aria-label="Toggle italic">
        <i class="bi bi-type-bold h-4 w-4"></i>
      </Toggle>
    </div>
  </Tailwind>
);