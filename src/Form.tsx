import { FormEvent, useRef, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form(props: FormProps) {

  const form = useRef<HTMLFormElement>(null)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    props.onSave(data)
    form.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...props} ref={form}>
      {props.children}
    </form>
  );
}
