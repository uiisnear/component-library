const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");

const [buttonOutline, setButtonOutline] = useState("");
const [buttonDestructive, setButtonDestructive] = useState("");
const [buttonSecondary, setButtonSecondary] = useState("");
const [buttonGhost, setButtonGhost] = useState("");
const [buttonLink, setButtonLink] = useState("");

if (Tailwind == undefined) return "";
if (ButtonConf == undefined) return "";

if (buttonOutline === "")
  return <ButtonConf output={setButtonOutline} variant="outline" />;
if (buttonDestructive === "")
  return <ButtonConf output={setButtonDestructive} variant="destructive" />;
if (buttonSecondary === "")
  return <ButtonConf output={setButtonSecondary} variant="secondary" />;
if (buttonGhost === "")
  return <ButtonConf output={setButtonGhost} variant="ghost" />;
if (buttonLink === "")
  return <ButtonConf output={setButtonLink} variant="link" />;

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10 flex-column gap-2">
      <Button>Button</Button>
      <Button className={buttonOutline}>Outline</Button>
      <Button className={buttonDestructive}>Destructive</Button>
      <Button className={buttonSecondary}>Secondary</Button>
      <Button className={buttonGhost}>Ghost</Button>
      <Button className={buttonLink}>Link</Button>
    </div>
  </Tailwind>
);
