export default function About(){
    return(
        <section className="relative w-full min-h-screen bg-center bg-cover bg-box bg-no-repeat shadow-black flex align-cent justify-center">
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
