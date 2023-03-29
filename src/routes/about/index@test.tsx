import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() => {
  useStyles$(AboutStyles);

  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odio
        cupiditate consectetur dignissimos et minima eum natus fuga doloribus,
        earum, aspernatur eius porro vitae veritatis ab iste accusamus delectus
        fugiat!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odio
        cupiditate consectetur dignissimos et minima eum natus fuga doloribus,
        earum, aspernatur eius porro vitae veritatis ab iste accusamus delectus
        fugiat!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odio
        cupiditate consectetur dignissimos et minima eum natus fuga doloribus,
        earum, aspernatur eius porro vitae veritatis ab iste accusamus delectus
        fugiat!
      </p>
    </article>
  );
});
