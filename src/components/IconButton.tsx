import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type ElementType,
} from "react";

type IconButtonProps = {
  icon: ElementType;
  children: ReactNode;
  onClick: () => void;
} & ComponentPropsWithoutRef<"button">;

export default function IconButton({
  icon,
  children,
  ...otherProps
}: IconButtonProps) {
  const Icon = icon;
  return (
    <button {...otherProps}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
