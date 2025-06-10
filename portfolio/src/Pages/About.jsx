export default function About() {
    return (
      <section
        id="about"
        className="relative w-full min-h-screen bg-cover bg-box bg-[26%] bg-no-repeat flex items-start justify-center"
      >
      
        <div className="hidden lg:flex">
          <div className="absolute left-10">
            <img
              src="/Assets/React.svg"
              alt="React-logo"
              className="h-28 w-28 lg2:h-40 lg2:w-40"
            />
            <p className="text-4xl lg2:text-6xl text-center text-blue-300">React</p>
          </div>
          <div className="absolute">
            <img
              src="/Assets/Tailwind.svg"
              alt="Tailwind-logo"
              className="h-28 w-28 lg2:h-40 lg2:w-40"
            />
            <p className="text-4xl lg2:text-5xl text-center text-blue-300">Tailwind</p>
          </div>
          <div className="absolute left-16 top-56 lg2:left-20 lg2:top-80">
            <img
              src="/Assets/HTML.svg"
              alt="HTML-logo"
              className="h-36 w-36 lg2:h-48 lg2:w-48"
            />
          </div>
          <div className="absolute top-[20%] left-[30%]">
            <img
              src="/Assets/CSS.svg"
              alt="Css-logo"
              className="h-36 w-36 lg2:h-48 lg2:w-48"
            />
          </div>
          <div className="absolute left-10 bottom-52">
            <img
              src="/Assets/JS.png"
              alt="Javascript-logo"
              className="h-20 w-20 lg2:h-32 lg2:w-32"
            />
          </div>
          <div className="absolute top-80 left-[53%]">
            <img
              src="/Assets/redux.svg"
              alt="Redux-logo"
              className="h-36 w-36 lg2:h-48 lg2:w-48"
            />
            <p className="text-4xl lg2:text-6xl text-center text-blue-300">Redux</p>
          </div>
          <div className="absolute top-32 left-[62%]">
            <img
              src="/Assets/SQL.svg"
              alt="Sql-logo"
              className="h-24 w-24 lg2:h-36 lg2:w-36"
            />
          </div>
          <div className="absolute left-64 top-20 lg2:left-96 lg2:top-28">
            <img
              src="/Assets/bootstrap.svg"
              alt="Bootstrap-logo"
              className="h-24 w-24 lg2:h-36 lg2:w-36"
            />
            <p className="text-3xl lg2:text-4xl text-center text-blue-300">Bootstrap</p>
          </div>
          <div className="absolute right-72 top-48 lg2:right-96 lg2:top-44">
            <img
              src="/Assets/saa.svg"
              alt="Sass-logo"
              className="h-28 w-28 lg2:h-40 lg2:w-40"
            />
          </div>
        </div>
  
 
       <div className="lg:hidden w-full overflow-hidden absolute top-10 z-10">
          <div className="flex animate-slide360 gap-6 whitespace-nowrap w-[200%]">
          {[...Array(100)].map((_, i) => (
          <div key={i} className="flex gap-40">
        {[
          "React.svg",
          "Tailwind.svg",
          "HTML.svg",
          "CSS.svg",
          "JS.png",
          "redux.svg",
          "SQL.svg",
          "bootstrap.svg",
          "saa.svg",
        ].map((logo, j) => (
          <img
            key={j}
            src={`/Assets/${logo}`}
            alt={logo}
            className="h-20 w-20"
          />
            ))}
        </div>
          ))}
         </div>
         </div>


  
       
        <div className="absolute text-slate-900 flex justify-center top-[49%] left-[18%] md:left-[12.2%] md2:left-[16%] md3:left-[19%] md4:left-[20.5%] font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-sm md4:text-base lg:text-xl lg2:text-3xl">
          <div>
            <p className="text-[#569CD6]">{"Const developer:{"}</p>
            <div className="ml-5">
              <p className="pt-3 text-[#CE9178]">
                <span className="text-[#2DD4BF]">name:</span> Naol Girma,
              </p>
              <p className="text-[#CE9178]">
                <span className="text-[#2DD4BF]">status:</span> CSE student @ ASTU,
              </p>
              <p className="text-[#CE9178]">
                <span className="text-[#2DD4BF]">focus:</span> ["Web","AI","Growth"],
              </p>
            </div>
            <p className="text-[#569CD6]">{"}"}</p>
          </div>
        </div>
      </section>
    );
  }
  
  
  