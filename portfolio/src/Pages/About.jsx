export default function About(){
    return(
        <section className="relative w-full min-h-screen bg-center bg-cover bg-box bg-no-repeat  flex align-cent justify-center">
           
            <div className="absolute left-10"> 
            <img src="/Assets/React.svg" alt="React-logo" className=" h-40 w-40"/>
            <p className="text-6xl text-center text-blue-300">React</p>
            </div>
            <div className="absolute "> 
            <img src="/Assets/Tailwind.svg" alt="Tailwind-logo" className=" h-40 w-40"/>
            <p className="text-5xl text-center text-blue-300">Tailwind</p>
            </div>
            <div className="absolute left-20 top-80 "> 
            <img src="/Assets/HTML.svg" alt="HTML-logo" className=" h-48 w-48"/>
            </div>
            <div className="absolute top-[20%] left-[30%]"> 
            <img src="/Assets/CSS.svg" alt="Css-logo" className=" h-48 w-48"/>
            </div>
            <div className="absolute left-10 bottom-52 "> 
            <img src="/Assets/JS.png" alt="Javascript-logo" className=" h-32 w-32"/>
            </div>
            <div className="absolute top-80 left-[53%]"> 
            <img src="/Assets/redux.svg" alt="Redux-logo" className=" h-48 w-48"/>
            <p className="text-6xl text-center text-blue-300">Redux</p>
            </div>
            <div className="absolute top-32 left-[62%]"> 
            <img src="/Assets/SQL.svg" alt="Sql-logo" className=" h-36 w-36"/>
            </div>
            <div className="absolute left-96 top-28"> 
            <img src="/Assets/bootstrap.svg" alt="Bootstrap-logo" className=" h-36 w-36"/>
            <p className="text-4xl text-center text-blue-300">Bootstrap</p>
            </div>
            <div className="absolute right-96 top-44"> 
            <img src="/Assets/saa.svg" alt="Sass-logo" className=" h-40 w-40"/>
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




