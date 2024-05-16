const sliderClassname =
  "relative flex w-full touch-none select-none items-center justify-center w-1.5";

const SliderRoot = ({ className, orientation, ...props }) => {
  orientation = orientation ?? "horizontal";

  return (
    <Slider.Root
      ref="forwardedRef"
      className={className ?? sliderClassname}
      orientation={orientation}
      {...props}
    >
      <Slider.Track
        className={`relative ${
          orientation === "vertical" ? "h-full" : "w-full h-1.5"
        } grow overflow-hidden rounded-full bg-uin-primary/20`}
      >
        <Slider.Range
          className={`absolute ${
            orientation === "vertical" ? "w-full" : "h-full"
          } bg-uin-primary`}
        />
      </Slider.Track>
      <Slider.Thumb className="block h-4 w-4 rounded-full border border-uin-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </Slider.Root>
  );
};

return { Slider: SliderRoot, sliderClassname };
