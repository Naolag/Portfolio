export default function About(){
    return(
        <section className="relative w-full min-h-screen bg-center bg-cover bg-box bg-no-repeat  flex align-cent justify-center">
            <div className="text-[#CE9178] opacity-30 text-9xl absolute top-10 left-56 font-mono font-bold">Skill set</div>
            <div className="text-8xl"> </div>
            <div className="absolute left-10"> 
            <img src="public/Assets/React.svg" alt="React-logo" className=" h-48 w-48"/>
            <p className="text-6xl text-center text-blue-300">React</p>
            </div>
            <div className="absolute "> 
            <img src="/Assets/Tailwind.svg" alt="Tailwind-logo" className=" h-48 w-48"/>
            <p className="text-6xl text-center text-blue-300">Tailwind</p>
            </div>
            <div className="absolute left-20 top-80 "> 
            <img src="/Assets/HTML.svg" alt="HTML-logo" className=" h-48 w-48"/>
            </div>
            <div className="absolute left-96 top-56"> 
            <img src="/Assets/CSS.svg" alt="Css-logo" className=" h-48 w-48"/>
            </div>
            <div className="absolute left-10 bottom-52 "> 
            <img src="/Assets/JS.png" alt="Javascript-logo" className=" h-32 w-32"/>
            </div>

            <div className="absolute text-slate-900 felex alighn-center justify-center top-[49%] left-[21%] font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-3xl">
                <p className="text-[#569CD6]">{"Const developer:{"}</p>
                <div className="ml-5">
                <p className="pt-3 text-[#CE9178]"> <span className="text-[#2DD4BF]">name:</span> Naol Girma,</p>
                <p className=" text-[#CE9178]"> <span className="text-[#2DD4BF]">status:</span> CSE student @ ASTU,</p>
                <p className=" text-[#CE9178]"> <span className="text-[#2DD4BF]">focus:</span> ["Web","AI","Growth"],</p>
                </div>
                <p className="text-[#569CD6]">{"}"}</p>
            </div>
      </section>
      
    )
}




