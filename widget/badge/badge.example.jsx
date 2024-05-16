const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Badge, BadgeConf } = VM.require("uiisnear.near/widget/badge");

if (Tailwind == undefined) return "";
if (BadgeConf == undefined) return "";

const [badgeDestructive, setBadgeDestructive] = useState("");
const [badgeSecondary, setBadgeSecondary] = useState("");
const [badgeOutline, setBadgeOutline] = useState("");

if (badgeDestructive === "")
  return <BadgeConf output={setBadgeDestructive} variant="destructive" />;

if (badgeSecondary === "")
  return <BadgeConf output={setBadgeSecondary} variant="secondary" />;

if (badgeOutline === "")
  return <BadgeConf output={setBadgeOutline} variant="outline" />;

return (
  <Tailwind>
    <div className="flex w-full justify-center pt-10">
      <Badge>Badge</Badge>
      <Badge className={badgeDestructive}>Destructive</Badge>
      <Badge className={badgeSecondary}>Secondary</Badge>
      <Badge className={badgeOutline}>Outline</Badge>
    </div>
  </Tailwind>
);
