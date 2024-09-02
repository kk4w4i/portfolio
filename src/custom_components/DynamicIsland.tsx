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
                <Avatar className="size-[2.5rem]">
                    <AvatarImage className="object-cover" src={pfp} />
                </Avatar>
            </div>
        );
    }
  }, [view]);

  return (
    <div>
      <div className="flex justify-center h-[8rem] drop-shadow-md">
        <motion.div
          layout
          style ={{ borderRadius: 10, backgroundColor: "white"}}
          className="h-fit overflow-hidden"
          onMouseEnter={() => setView("open")}
          onMouseLeave={() => setView("idle")}
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
}