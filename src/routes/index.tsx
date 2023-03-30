import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const name = useSignal("Bob");

  return (
    <>
      <h2>Hello World</h2>
      <p>Hello {name.value}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Learning Qwik 2023",
  meta: [
    {
      name: "description",
      content: "Learning about Qwik in 2023",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "www.google.com",
    },
  ],
};
