import { useState } from "react";
import Toast from "./toast";
import usePlayListIdStore from "../store/usePlayListIdStore";
import { useShowInput } from "../hook/useShowInput";

const PlayListForm = () => {
  const [formData, setFormData] = useState({ playlistId: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const { setShowInput } = useShowInput();
  const setPlayListId = usePlayListIdStore((s) => s.setPlayListId);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, playlistId: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.playlistId.trim() === "") return;

    const playlistIdRegex = /^(PL|LL|RD|UU|OLAK|WL)[\w-]{10,}$/;

    let nextStatus: "success" | "error";

    if (playlistIdRegex.test(formData.playlistId)) {
      setPlayListId(formData.playlistId);
      setStatus("success");
      nextStatus = "success";
    } else {
      setStatus("error");
      setFormData({ playlistId: "" });
      nextStatus = "error";
    }

    setTimeout(() => {
      //Hide the input field if the nextStatus is success, because state updates are asynchronous.
      //also important fact: JavaScript closures capture the variable value at the time of function creation).
      if (nextStatus === "success") setShowInput(false);

      // After 2 seconds, reset the status, null means no toast will be shown.
      setStatus((prev) => (nextStatus === "success" ? null : prev));
    }, 2000);
  };

  return (
    <>
      <form action="/" method="post" className="flex items-center w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          key="playlist-input"
          value={formData.playlistId}
          onChange={handleChange}
          placeholder="Enter youtube playlist id"
          className="flex-1 me-1 h-full rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500"
        />
      </form>
      {status && <Toast status={status} />}
    </>
  );
};
export default PlayListForm;
