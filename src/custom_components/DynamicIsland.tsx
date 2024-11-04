import { useMemo, useState } from "react";
import OpenIsland from "./OpenIsland";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import pfp from '../assets/img/pfp.webp'

export default function DynamicIsland() {
  const [view, setView] = useState("idle");

  const content = useMemo(() => {
    switch (view) {
      case "open":
        return <OpenIsland />;
      case "idle":
        return (
            <div>
                <Avatar className="size-[2rem] md:size-[2.5rem] rounded-lg">
                    <AvatarImage className="object-cover" src={pfp} />
                </Avatar>
            </div>
        );
    }
  }, [view]);

  return (
      <div className="flex justify-center items-center z-[50]">
        <motion.div
          layout
          style={{
            borderRadius: 10,
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
          }}
          className="h-fit absolute right-0 md:right-auto w-fit"
          onMouseEnter={() => setView("open")}
          onMouseLeave={() => setView("idle")}
        >
          {content}
        </motion.div>
      </div>
  );
}