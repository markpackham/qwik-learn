import { Resource, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogData = routeLoader$(async ({ params, redirect }) => {
  const res = await fetch(`http://localhost:3000/blogs/${params.id}`);

  if (!res.ok) {
    redirect(301, "/");
  }

  const blogObj = (await res.json()) as BlogData;
  return blogObj;
});

export default component$(() => {
  const blogValue = useBlogData().value;

  return (
    <div class="blog">
      <Resource
        value={blogValue}
        onPending={() => <div>Loading...</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  );
});
