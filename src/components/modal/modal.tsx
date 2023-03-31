import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

export default component$(() => {
  useStylesScoped$(ModalStyles);

  return (
    <div class="modal">
      <div class="modal-content">
        <div class="close">
          <main class="main">Main modal content</main>
          <footer>modal footer content</footer>
        </div>
      </div>
    </div>
  );
});
