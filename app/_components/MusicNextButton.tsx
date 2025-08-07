import { Button, Kbd } from "@radix-ui/themes";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

const MusicNextButton = ({ next }: { next: () => any }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.key === "l") {
        next();
        await controls.start({ scale: 0.9 });
        await controls.start({ scale: 1 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, controls]);

  return (
    <motion.div animate={controls} whileTap={{ scale: 0.9 }} className="w-full">
      <Button variant="outline" className="outline-0! w-[100%]!" color="gray" onClick={next}>
        Next <Kbd>L</Kbd>
      </Button>
    </motion.div>
  );
};

export default MusicNextButton;
