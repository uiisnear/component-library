const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");

const {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  hoverCardContentClassname,
} = VM.require("uiisnear.near/widget/hoverCard");
const { Avatar, AvatarImage, AvatarFallback } = VM.require(
  "uiisnear.near/widget/avatar"
);
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");

if (ClassnameConf == undefined) return "";
if (ButtonConf == undefined) return "";

const [buttonOpen, setButtonOpen] = useState("");
const [hoverCardContent, setHoverCardContent] = useState("");

if (buttonOpen === "")
  return <ButtonConf output={setButtonOpen} variant="link" />;

if (hoverCardContent === "") {
  let className = `${hoverCardContentClassname} w-80`;
  return <ClassnameConf output={setHoverCardContent} className={className} />;
}

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <HoverCard>
        <HoverCardTrigger>
          <Button className={buttonOpen}>@uiisnear</Button>
        </HoverCardTrigger>
        <HoverCardContent className={hoverCardContent}>
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework - created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <i class="bi bi-calendar3 mr-2 h-4 w-4 opacity-70"></i>{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  </Tailwind>
);
