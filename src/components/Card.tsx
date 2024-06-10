import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
};

export default function Card({ title, actions, children }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
}
