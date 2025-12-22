import { Dialog } from "radix-ui";
import { RxCross2 } from "react-icons/rx";
import "./styles.css";
import { Button } from "@radix-ui/themes";
import Markdown from "../markdown";

const DialogMessage = ({ state }: { state: "success" | "error" }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {state === "error" && (
        <Button className="text-balance" variant="outline" color="gray">
          How to get playlist ID
        </Button>
      )}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">{"Here's how to get a youtube playlist id"}</Dialog.Title>
        <Markdown />
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <RxCross2 />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogMessage;
