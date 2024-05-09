const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");

const { Avatar, AvatarImage, AvatarFallback } = VM.require(
  "uiisnear.near/widget/avatar"
);

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@uiisnear" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </Tailwind>
);
