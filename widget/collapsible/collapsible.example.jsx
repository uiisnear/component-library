const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const { Collapsible, CollapsibleTrigger, CollapsibleContent } = VM.require(
  "uiisnear.near/widget/collapsible"
);

const [buttonToggle, setButtonToggle] = useState("");

if (Tailwind == undefined) return "";
if (ButtonConf == undefined) return "";

if (buttonToggle === "")
  return <ButtonConf output={setButtonToggle} variant="ghost" size="sm" />;

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger>
            <Button className={buttonToggle}>
              <i class="bi bi-arrow-down-up h-4 w-4"></i>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </Tailwind>
);
