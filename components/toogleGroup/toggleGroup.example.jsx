const { Tailwind } = VM.require("uiisnear.near/widget/tailwind");
const { ToggleGroup, ToggleGroupItem } = VM.require(
  "uiisnear.near/widget/toggleGroup"
);
const { ToggleConf } = VM.require("uiisnear.near/widget/toggle");

if (ToggleConf == undefined) return "";

const [toggleItemClassname, setToggleItemClassname] = useState("");

if (toggleItemClassname === "")
  return <ToggleConf output={setToggleItemClassname} />;

if (Tailwind == undefined) return "";

return (
  <Tailwind>
    <div className="flex mx-auto w-max pt-10">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a" className={toggleItemClassname}>
          <i class="bi bi-type-bold h-4 w-4"></i>
        </ToggleGroupItem>
        <ToggleGroupItem value="b" className={toggleItemClassname}>
          <i class="bi bi-type-italic h-4 w-4"></i>
        </ToggleGroupItem>
        <ToggleGroupItem value="c" className={toggleItemClassname}>
          <i class="bi bi-type-underline h-4 w-4"></i>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </Tailwind>
);
