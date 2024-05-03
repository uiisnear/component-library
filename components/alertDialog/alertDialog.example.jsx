const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");

const { Button, ButtonConf } = VM.require("uiisnear.near/widget/button");
const {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} = VM.require("uiisnear.near/widget/alertDialog");

if (Tailwind == undefined) return "";
if (ButtonConf == undefined) return "";

const [buttonCancel, setButtonCancel] = useState("");
const [buttonContinue, setButtonContinue] = useState("");
const [buttonDialog, setButtonDialog] = useState("");

if (buttonCancel === "")
  return (
    <ButtonConf
      output={setButtonCancel}
      variant="outline"
      className="w-full sm:w-fit"
    />
  );
if (buttonDialog === "")
  return <ButtonConf output={setButtonDialog} variant="outline" />;
if (buttonContinue === "")
  return (
    <ButtonConf
      output={setButtonContinue}
      className="w-full sm:w-fit mb-2 sm:mb-0"
    />
  );

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className={buttonDialog}>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className={buttonCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className={buttonContinue}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </Tailwind>
);
