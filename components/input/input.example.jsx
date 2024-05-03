const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");

const { Input } = VM.require("uiisnear.near/widget/input");

if (Tailwind === undefined) return <></>;

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Input type="email" placeholder="Email" />
    </div>
  </Tailwind>
);
