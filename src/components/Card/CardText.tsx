import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ElementType,
} from "react";

type CardTextProps<T extends ElementType> = PropsWithChildren<
  {
    as?: T;
  } & ComponentPropsWithoutRef<T>
>;

export default function CardText<C extends ElementType>({
  as,
  children,
  ...props
}: CardTextProps<C>) {
  const Component = as || "p";
  return <Component {...props}>{children}</Component>;
}
