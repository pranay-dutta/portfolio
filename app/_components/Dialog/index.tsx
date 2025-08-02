import { Dialog } from "radix-ui";
import { RxCross2 } from "react-icons/rx";
import "./styles.css";
import { Button } from "@radix-ui/themes";

const DialogMessage = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="outline" color="gray">
        How to add playlist
      </Button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
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
