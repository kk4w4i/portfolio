
import { Button } from "@/components/ui/button"
import { Cube } from "../assets/svg/icons"
import DynamicIsland from "@/custom_components/DynamicIsland"
import Gallery from "@/custom_components/Gallery"
import projectDetails from "@/projectDetails"

const Hero = () => {

    return (
        <div className="flex flex-col items-center font-inter p-[1rem] justify-center">
            <div className="drop-shadow-md">
                <DynamicIsland/>
            </div>
            
            
            <p className="text-center text-[24px] lg:text-[40px] mt-[3vh] lg:mt-[12vh] max-w-[60vw] lg:max-w-[40vw] font-regular leading-[2rem] lg:leading-[3.5rem]">
                Hi my name is Kintaro, an aspiring product developer, with an interest in design.
            </p>

            <section className="relative mt-[4vh] ">
                <Button 
                    className="rounded-full font-light text-white px-[60px] py-[25px] drop-shadow-lg"
                    onClick={() => window.location.href = 'mailto:kintarokawai@gmail.com'}
                >Say Hi!
                </Button>
                <span className="absolute right-0 top-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </section>

            <div className="mt-[10vh] w-full">
                <section className="flex justify-center items-center gap-2 text-[0.8rem]">
                    <Cube/>
                    <h3 className="text-[#BABABA] font-light">
                        My work and experinces.
                    </h3>
                </section>
                
                <Gallery items={projectDetails}/>
            </div>
        </div>
    )
}

export default Hero