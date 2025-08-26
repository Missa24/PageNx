import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f7bd2d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#030d41,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f7bd2d,transparent),radial-gradient(circle_farthest-side_at_0_0,#1a202c,#030d41)]",
          animate ? "animate-pulse" : ""
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f7bd2d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#030d41,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f7bd2d,transparent),radial-gradient(circle_farthest-side_at_0_0,#1a202c,#030d41)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};