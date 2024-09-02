import { Github, Gmail, Linkedin, Signature, X } from "@/assets/svg/icons";
import clsx from "clsx";
export default function OpenIsland() {
  return (
    <div
      className={clsx(
        "relative flex h-[8rem] items-between justify-between p-5 w-full gap-5",
      )}
    >
      <div className="flex items-between justify-between gap-5">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-medium text-black font-inter">Kintaro Kawai</span>
          <Signature size={150} />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <X size={35} />
            <Github size={35} />
            <Linkedin size={35} />
            <Gmail size={35} />
        </div>
      </div>
    </div>
  );
}