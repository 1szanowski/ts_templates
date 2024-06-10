import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ContainerProps<T extends ElementType> = {
  module?: T; //ident of component
  children: ReactNode;
} & ComponentPropsWithoutRef<T>; //mergin to accept all related to obj

export default function Container<C extends ElementType>({
  module,
  children,
  ...props
}: ContainerProps<C>) {
  const CustomComponent = module || "div";
  return <CustomComponent {...props}>{children}</CustomComponent>;
}
