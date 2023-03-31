import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import Modal from "~/components/modal/modal";
import AboutStyles from "./about.css?inline";

export default component$(() => {
  useStyles$(AboutStyles);

  const modalVisible = useSignal(false);

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

      <button onClick$={() => (modalVisible.value = true)}>Open Modal</button>

      {modalVisible.value && (
        <Modal size="sm" frosted={true}>
          <div q:slot="content">
            <h2>Great News!!!</h2>
            <p>This is the main content</p>
          </div>
          <div q:slot="footer">
            <p>This is the footer</p>
          </div>
        </Modal>
      )}
    </article>
  );
});
