import { Toast } from "radix-ui";
import "./styles.css";
import Dialog from "../Dialog";

interface ToastMessageProps {
  status: "success" | "error";
}
const ToastMessage = ({ status }: ToastMessageProps) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open>
        <Toast.Title className="ToastTitle">{status === "success" ? "Success" : "Error"}</Toast.Title>
        <Toast.Description asChild>
          <p className="ToastDescription">
            {status === "success" ? "Playlist Added" : "Invalid Playlist ID"}
          </p>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="How to add playlist">
          <Dialog />
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastMessage;
