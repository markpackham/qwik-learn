import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const name = useSignal("Bob");

  const person = useStore({ name: "Peach", age: 30 });

  return (
    <>
      <h2>Hello World</h2>
      <p>Hello {name.value}</p>
      <p>
        Hello {person.name} your age is {person.age}
      </p>
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
