const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const { Progress } = VM.require("uiisnear.near/widget/progress");

const [progress, setProgress] = useState(13);

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="w-96 mx-auto pt-10">
      <Progress value={progress} />
    </div>
  </Tailwind>
);
