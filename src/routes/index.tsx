import { component$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogData = routeLoader$(async () => {
  const res = await fetch("http://localhost:3000/blogs");
  const blogs = (await res.json()) as BlogData;
  return blogs;
});

export default component$(() => {
  const blogs = useBlogData().value;

  console.log(blogs[0].title);

  return <div>{String(blogs)}</div>;
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "a blog site about everything Super Mario related",
    },
  ],
};
