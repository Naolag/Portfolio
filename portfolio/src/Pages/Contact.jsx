import { MapPinIcon,PhoneIcon,EnvelopeIcon } from "@heroicons/react/24/outline"
import { Instagram, Linkedin, Github } from "lucide-react";
export default function Contact(){
    return(
        <section id="contact" className="relative flex flex-col items-center justify-between w-full bg-black/40">
            <div className="flex items-center justify-between pb-40 pt-10 md:pt-20  ">
            <div className="md:w-[45%] pr-8  pl-8 md:pr-10 md:pl-12 lg:pl-60">
                <p className="text-xl md:text-4xl lg:text-6xl font-serif font-bold text-center "><span className="hidden smd:flex">Not just UI. Not just UX. An </span>Experience.</p>
                <p className="hidden md:flex text-sm md:text-xl lg:text-3xl font-serif pt-[5%]">I design with intention and build with precision. If you’re chasing impact, not just aesthetics — I’m your move. </p>
                <p className=" text-sm md:text-xl lg:text-3xl font-serif pt-[5%]">I’m ready to build something timeless with you.</p> 
                <p className="text-sm md:text-2xl lg:text-4xl font-serif font-bold">    Contact me right way</p>
            </div>
            <div className="md:w-[35%] pb-0 md:pb-8   pr-10 md:pr-40"> 
                <p className="text:xl md:text-4xl lg:text-6xl font-serif font-bold text-center" >Contact</p>
                    <div className=" pt-[10%] flex  gap-3 md:gap-6 lg:gap-16">
                        <MapPinIcon className="h-8 w-10 md:h-10 md:w-12  "/>
                        <p className="text-sm md:text-xl lg:text-3xl font-serif" >Adama Science and Technology University</p>
                    </div>
                    <div className=" pt-[5%] flex  gap-3 md:gap-6 lg:gap-16">
                        <PhoneIcon className="h-6 md-8 md:h-8 md:w-10 lg:h-10 lg:w-12 "/>
                        <div>
                        <p className="text-sm md:text-xl lg:text-3xl font-serif">+251993270601</p>
                        <p className="text-sm md:text-xl lg:text-3xl font-serif">+251711685726</p>
                        </div>
                    </div>
                    <div className=" pt-[5%] flex gap-3 md:gap-6 lg:gap-16">
                        <EnvelopeIcon className="h-6 w-8 md:h-8 md:w-10 lg:h-10 lg:w-12"/>
                        <p className="text-sm md:text-xl lg:text-3xl font-serif">naolggonfa@gmail.com</p>
                    </div>
            </div>
            </div>
            <div className="absolute bottom-10 flex gap-5 md:gap-10 lg:gap-16">
                <a href="https://www.instagram.com/_nao1a/" target="_blank" rel="noopener noreferrer">
                   <Instagram size={50} color="red"/>
                </a>
                <a href="https://github.com/Naolag" target="_blank" rel="noopener noreferrer">
                   <Github size={50}/>
                </a>
                <a href="https://www.linkedin.com/in/naol-girma-80bb66348/" target="_blank" rel="noopener noreferrer">
                   <Linkedin size={50} color="blue"/>
                </a>
            </div>
        </section>
    )
}