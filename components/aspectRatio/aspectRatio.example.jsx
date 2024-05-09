const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");

const { AspectRatio } = VM.require("uiisnear.near/widget/aspectRatio");

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="mx-auto pt-10 w-64">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  </Tailwind>
);
