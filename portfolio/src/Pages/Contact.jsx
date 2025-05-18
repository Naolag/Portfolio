import { MapPinIcon,PhoneIcon,EnvelopeIcon } from "@heroicons/react/24/outline"
import { Instagram, Linkedin, Github } from "lucide-react";
export default function Contact(){
    return(
        <section id="contact" className="relative flex flex-col items-center justify-center w-full min-h-screen bg-center bg-cover bg-no-repeat bg-contact">
            <div className="flex items-center justify-center ">
            <div className="w-[50%] pr-96">
                <p className="text-6xl font-serif font-bold text-center ">Not just UI. Not just UX. An experience.</p>
                <p className="text-3xl font-serif pt-[5%]">I design with intention and build with precision. If you’re chasing impact, not just aesthetics — I’m your move. </p>
                <p className="text-3xl font-serif pt-[5%]">I’m ready to build something timeless with you.</p> 
                <p className="text-4xl font-serif font-bold">    Contact me right way</p>
            </div>
            <div className="pb-8"> 
                <p className="text-6xl font-serif font-bold text-center" >Contact</p>
                    <div className=" pt-[10%] flex gap-16">
                        <MapPinIcon className="h-10 w-10 "/>
                        <p className="text-3xl font-serif" >Adama SCience and Technology University</p>
                    </div>
                    <div className=" pt-[5%] flex gap-16">
                        <PhoneIcon className="h-10 w-10 "/>
                        <div>
                        <p className="text-3xl font-serif">+251993270601</p>
                        <p className="text-3xl font-serif">+251711685726</p>
                        </div>
                    </div>
                    <div className=" pt-[5%] flex gap-16">
                        <EnvelopeIcon className="h-10 w-10"/>
                        <p className="text-3xl font-serif">naolggonfa@gmail.com</p>
                    </div>
            </div>
            </div>
            <div className="absolute bottom-10 flex gap-16">
                <a href="https://instagram.com/Nao1" target="_blank" rel="noopener noreferrer">
                   <Instagram size={50} color="red"/>
                </a>
                <a href="https://github.com/Naolag" target="_blank" rel="noopener noreferrer">
                   <Github size={50}/>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                   <Linkedin size={50} color="blue"/>
                </a>
            </div>
        </section>
    )
}