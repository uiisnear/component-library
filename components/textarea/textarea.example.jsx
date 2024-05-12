const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Textarea } = VM.require("uiisnear.near/widget/textarea");

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="mx-auto w-96 pt-10">
      <Textarea placeholder="Type your message here." />
    </div>
  </Tailwind>
);
