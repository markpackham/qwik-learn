import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

interface ModalProps {
  size: "sm" | "lg";
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles);

  return (
    <div class="modal">
      <div class="modal-content">
        <div class="close">
          <main class="main">
            <Slot name="content" />
          </main>
          <footer>
            <Slot name="footer" />
          </footer>
        </div>
      </div>
    </div>
  );
});
