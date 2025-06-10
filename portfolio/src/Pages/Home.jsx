import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home">
        <div className=" w-full min-h-screen bg-center bg-cover bg-home_bg bg-no-repeat ">
          <div className=" md:text-5xl lg:text-6xl text-4xl font-bold text-center pt-96">
        <Typewriter
          words={['Hey, I’m Naol.','I’m Front end developer experianced with many Frame works','I turn coffee into code.','I give life to ideas', 'Let’s build something epic together.']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>  
        </div>
    </section>
  )
}
