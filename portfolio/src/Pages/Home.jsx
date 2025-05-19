import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home">
        <div className="w-full min-h-screen bg-center bg-cover bg-home_bg bg-no-repeat ">
          <div className=" text-6xl font-bold text-center pt-96">
        <Typewriter
          words={['Hey, I’m Naol.', 'I turn coffee into code.', 'Let’s build something epic.']}
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
