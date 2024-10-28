import { cn } from "../utils/cn";

export function TextButton({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold opacity-80 shadow transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring",
        className,
      )}
      {...props}
    />
  );
}

export function IconButton({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-full bg-white/10 p-3 font-semibold opacity-80 shadow transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring",
        className,
      )}
      {...props}
    />
  );
}
