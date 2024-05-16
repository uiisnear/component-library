const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button } = VM.require("uiisnear.near/widget/button");
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
  cardContentClassname,
} = VM.require("uiisnear.near/widget/card");

const {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListClassname,
  tabsTriggerClassname,
  tabsContentClassname,
} = VM.require("uiisnear.near/widget/tabs");

if (ClassnameConf == undefined) return "";

const [tabsList, setTabsList] = useState("");
const [cardContent, setCardContent] = useState("");

if (tabsList === "") {
  let className = `${tabsListClassname} grid w-full grid-cols-2`;
  return <ClassnameConf output={setTabsList} className={className} />;
}

if (cardContent === "") {
  let className = `${cardContentClassname} space-y-2`;
  return <ClassnameConf output={setCardContent} className={className} />;
}

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <Tabs defaultValue="account" className="w-96">
        <TabsList className={tabsList}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className={cardContent}>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className={cardContent}>
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </Tailwind>
);
