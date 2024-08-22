import "../about/about.css";

const About = () => {
  return (
    <div className="col-span-12 md:col-span-6 md:row-span-3 bg-transparent rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
        <div className="h-full w-full grid grid-cols-6 grid-rows-4 gap-4">
            <div className="col-span-3 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20 logo">
                <p className="w-full h-full flex justify-center items-center -skew-y-12 text-9xl 2xl:text-[200px] font-bold pr-3"><span>ゴゴ</span></p>
            </div>
            <div className="col-span-3 row-span-2 bg-transparent rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                <div className="h-full w-full grid grid-cols-6 grid-rows-4 gap-4">
                    <div className="col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <p className="text-3xl font-semibold">Saúl López</p>
                            <p className="text-xl 2xl:text-3xl font-medium md:text-nowrap">Desarrollador FullStack</p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                        <a href="https://www.linkedin.com/in/saullopezdev/" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">LinkedIn</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="" className="h-12 hover:h-16 duration-200 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                        <a href="https://github.com/SaulLpz" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">GitHub</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" className="h-12 hover:h-16 duration-200 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                        <a href="mailto:saul-lpz30@outlook.com" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">Mail</span>
                                <img src="https://www.svgrepo.com/show/223047/gmail.svg" alt="" className="h-12 hover:h-16 duration-200 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
                <div className="flex flex-col gap-4 p-8 text-pretty text-xl">
                    <p className="text-3xl font-bold">Acerca de mi</p>
                    <p className="leading-8">
                    Desarrollador con una pasión innata por la tecnología y el desarrollo de software. Poseo una sólida
                    base en programación y un firme compromiso con el aprendizaje continuo, actualmente me encuentro
                    profundizando mi conocimiento en la parte del backend, así como el concepto general para tener una mayor 
                    flexibilidad y poder utilizar cualquier tecnología para la resolución de problemas. Mi objetivo es contribuir 
                    con mi creatividad y habilidades técnicas en un entorno colaborativo que me permita crecer profesionalmente.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About