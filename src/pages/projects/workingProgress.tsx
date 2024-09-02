import { DocumentLoading } from "@/assets/svg/icons";

export default function WokringProgress() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen font-inter text-neutral-400">
            <DocumentLoading size={35} color="#A3A3A3"/>
            Currently documenting this project.
        </div>
    )
}