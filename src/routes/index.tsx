import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import Card from "~/components/card/card";

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

  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <Resource
        value={blogs}
        onPending={() => <div>Loading blogs...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs !== null &&
              blogs.map((blog) => (
                <Card key={blog.id}>
                  <h3 q:slot="title">{blog.title}</h3>
                  <p q:slot="content">{blog.content.slice(0, 50)}...</p>
                  <Link q:slot="footer" href={`/blog/${blog.id}`}>
                    <button>Read More</button>
                  </Link>
                </Card>
              ))}
          </div>
        )}
      />
    </div>
  );
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
