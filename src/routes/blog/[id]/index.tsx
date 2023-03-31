import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogData = routeLoader$(async ({ params }) => {
  const res = await fetch(`http://localhost:3000/blogs/${params.id}`);
  const blogObj = (await res.json()) as BlogData;
  return blogObj;
});

export default component$(() => {
  const blog = useBlogData().value;
  console.log(blog);

  return <>Hello World</>;
});
