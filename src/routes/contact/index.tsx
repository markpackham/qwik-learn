import { component$, useStylesScoped$ } from "@builder.io/qwik";
// it always needs a ?inline to work
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles);

  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odio
        cupiditate consectetur dignissimos et minima eum natus fuga doloribus,
        earum, aspernatur eius porro vitae veritatis ab iste accusamus delectus
        fugiat!
      </p>
    </article>
  );
});
