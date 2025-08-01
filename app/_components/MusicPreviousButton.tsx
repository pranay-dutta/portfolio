import { Button, Kbd } from "@radix-ui/themes";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MusicPreviousButton = ({ prev }: { prev: () => any }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.key === "j") {
        prev();
        await controls.start({ scale: 0.9 });
        await controls.start({ scale: 1 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, controls]);

  return (
    <motion.div animate={controls} whileTap={{ scale: 0.9 }} className="w-full">
      <Button variant="outline" className="outline-0! w-[100%]!" color="gray" onClick={prev}>
        Prev <Kbd>J</Kbd>
      </Button>
    </motion.div>
  );
};

export default MusicPreviousButton;
