const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const { Input } = VM.require("uiisnear.near/widget/input");
const { Label } = VM.require("uiisnear.near/widget/label");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardClassname,
  cardFooterClassname,
} = VM.require("uiisnear.near/widget/card");
const { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } =
  VM.require("uiisnear.near/widget/select");

if (Tailwind == undefined) return "";
if (ButtonConf == undefined) return "";
if (ClassnameConf == undefined) return "";

const [buttonCancel, setButtonCancel] = useState("");
const [card, setCard] = useState("");
const [cardFooter, setCardFooter] = useState("");

if (buttonCancel === "")
  return <ButtonConf output={setButtonCancel} variant="outline" />;

if (card === "") {
  let className = `${cardClassname} max-w-lg sm:w-96`;
  return <ClassnameConf output={setCard} className={className} />;
}

if (cardFooter === "") {
  let className = `${cardFooterClassname} flex justify-between`;
  return <ClassnameConf output={setCardFooter} className={className} />;
}

return (
  <Tailwind>
    <div className="flex max-w-lg px-10 mx-auto w-max pt-10">
      <Card className={card}>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className={cardFooter}>
          <Button className={buttonCancel}>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  </Tailwind>
);
