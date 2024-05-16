const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const {
  TooltipProvider,
  TooltipR,
  TooltipTrigger,
  TooltipContent,
  tooltipContentClassname,
} = VM.require("uiisnear.near/widget/tooltip");

const [buttonHover, setButtonHover] = useState("");

if (buttonHover === "")
  return <ButtonConf output={setButtonHover} variant="outline" />;

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <TooltipProvider>
        <TooltipR>
          <TooltipTrigger>
            <Button className={buttonHover}>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </TooltipR>
      </TooltipProvider>
    </div>
  </Tailwind>
);
