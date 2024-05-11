const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ClassnameConf } = VM.require("uiisnear.near/widget/utils");
const { Skeleton, skeletonClassname } = VM.require(
  "uiisnear.near/widget/skeleton"
);

if (ClassnameConf == undefined) return "";

const [skeletonCircle, setSkeletonCircle] = useState("");
const [skeletonTop, setSkeletonTop] = useState("");
const [skeletonBottom, setSkeletonBottom] = useState("");

if (skeletonCircle === "") {
  let className = `${skeletonClassname} h-12 w-12 rounded-full`;
  return <ClassnameConf output={setSkeletonCircle} className={className} />;
}
if (skeletonTop === "") {
  let className = `${skeletonClassname} h-4 w-64`;
  return <ClassnameConf output={setSkeletonTop} className={className} />;
}
if (skeletonBottom === "") {
  let className = `${skeletonClassname} h-4 w-48`;
  return <ClassnameConf output={setSkeletonBottom} className={className} />;
}

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10 space-x-4">
      <Skeleton className={skeletonCircle} />
      <div className="space-y-2">
        <Skeleton className={skeletonTop} />
        <Skeleton className={skeletonBottom} />
      </div>
    </div>
  </Tailwind>
);
