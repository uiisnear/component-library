const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { Button } = VM.require("uiisnear.near/widget/button");
const { Toaster, ToastAction, ToastConf } = VM.require(
  "uiisnear.near/widget/toast"
);
 
const [toasts, setToasts] = useState([]);
 
const openToast = ({ ...props }) => {
  setToasts([
    {
      ...props,
      open: true,
      onOpenChange: (open) => {
        if (!open) setToasts([]);
      },
    },
  ]);
};
 
if (Tailwind == undefined) return "";
 
return (
  <Tailwind>
    <Toaster toasts={toasts} />
    <div className="flex mx-auto w-max pt-48">
      <Button
        onClick={() => {
          openToast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </div>
  </Tailwind>
);