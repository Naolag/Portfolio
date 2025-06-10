import { Menu} from "lucide-react";
import { useState,useRef, useEffect } from "react";
import {Link } from "react-scroll"
const Navlinks=()=>{
    return(
        <> 
        <Link to="home" className="text-2xl lg:text-3xl font-lora" smooth={true} duration={800}>Home</Link>
        <Link to="about" className="text-2xl lg:text-3xl font-lora" smooth={true} duration={800} >About </Link>
        <Link to="project" className="text-2xl lg:text-3xl  font-lora" smooth={true} duration={800}>Project</Link>
        <Link to="contact" className="text-2xl  lg:text-3xl font-lora" smooth={true} duration={800}>Contacts</Link>
      </>
    )
}
function Nav(){
    const [isOpen,setIsOpen]=useState(false);
    const menuRef= useRef();
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        function handleClickOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target)){
               setIsOpen(false); 
            }
        }
        if(isOpen){
            document.addEventListener("mousedown",handleClickOutside);
        }
        return()=>{
            document.removeEventListener("mousedown",handleClickOutside);
        };
    },[isOpen])
    return(
        <div
            ref={menuRef} 
            className="flex">
            <div className="hidden  md:flex ml-auto  gap-10 pr-36 pt-10 pb-5">
                <Navlinks/>
            </div>
            <div className="md:hidden ml-auto pr-10 pt-10">
              <button onClick={toggleNavbar}>
               {<Menu size={28} />}
        </button>
      </div>
     {isOpen&& (
        <div className="md:hidden menu absolute bg-black/40 backdrop-blur-md   flex justify-center flex-col
                            top-[100%] right-0 left-[25%] min-h-screen z-50
                            pl-[10%] text-white font-sans font-custom-700 text-2xl sm:text-3xl">
          <Link to="home" className="py-6" smooth={true} duration={800}>Home</Link>
          <Link to="about" className="py-6" smooth={true} duration={800}>About</Link>
          <Link to="project" className="py-6" smooth={true} duration={800}>Project</Link>
          <Link to="contacts" className="py-6" smooth={true} duration={800}>Contacts</Link>             
            </div>
     )}
     </div>
    )
}
export default Nav;