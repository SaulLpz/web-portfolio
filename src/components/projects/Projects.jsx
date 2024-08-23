import Metroidvania from "../../assets/metroidvania.png";
import Pixela from "../../assets/pixela.png";
import Kolors from "../../assets/color-palette.png";

import "../projects/projects.css";

const Projects = () => {
  return (
    <>
        <div className="col-span-12 md:col-span-4 md:row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
            <div className="w-full h-full flex flex-col md:flex-row p-4">
                <img src={Pixela} alt="Metroidbania Image" className="w-full xl:w-1/2 h-full rounded-2xl object-cover"/>
                <div className="flex flex-col pl-4 justify-between">
                    <p className="font-bold text-lg">Pixela</p>
                    <div className="w-ful h-[1px] bg-white opacity-50"/>
                    <p className="text-sm text-pretty truncate">Editor para crear pixel art, arte 2D que se dibuja digitalmente píxel a píxel, con la posibilidad de elegir el tamaño de lienzo y de poder descargar los dibujos.</p>
                    <div className="flex gap-4">
                        <div className="bg-yellow-500 py-[2px] px-[6px] text-sm rounded-sm">JavaScript</div>
                        <div className="bg-pink-600 py-[2px] px-[6px] text-sm rounded-sm">SCSS</div>
                        <div className="bg-cyan-700 py-[2px] px-[6px] text-sm rounded-sm">React</div>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://pixela-sigma.vercel.app/" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">Live Demo</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/doctrine/doctrine-plain.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                        <a href="https://github.com/SaulLpz/pixel-art" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">GitHub</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
            <div className="w-full h-full flex flex-col md:flex-row p-4">
                <img src={Kolors} alt="Metroidbania Image" className="w-full xl:w-1/2 h-full rounded-2xl object-cover"/>
                <div className="flex flex-col pl-4 justify-between">
                    <p className="font-bold text-lg">Kolors</p>
                    <div className="w-ful h-[1px] bg-white opacity-50"/>
                    <p className="text-sm text-pretty truncate">Generador de paleta de colores, mediante una función que genera un valor hexadecimal, bloquea el color para no perderlo o descarga la paleta de colores.</p>
                    <div className="flex gap-4">
                        <div className="bg-yellow-500 py-[2px] px-[6px] text-sm rounded-sm ">JavaScript</div>
                        <div className="bg-cyan-500 py-[2px] px-[6px] text-sm rounded-sm ">Tailwind</div>
                        <div className="bg-cyan-700 py-[2px] px-[6px] text-sm rounded-sm ">React</div>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://color-palette-generator-taupe.vercel.app/" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">Live Demo</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/doctrine/doctrine-plain.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                        <a href="https://github.com/SaulLpz/color-palette-generator" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">GitHub</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
            <div className="w-full h-full flex flex-col md:flex-row p-4">
                <img src={Metroidvania} alt="Metroidbania Image" className="w-full xl:w-1/2 h-full rounded-2xl object-cover"/>
                <div className="flex flex-col pl-4 justify-between">
                    <p className="font-bold text-lg">Metroidvania Pixel Art</p>
                    <div className="w-ful h-[1px] bg-white opacity-50"/>
                    <p className="text-sm text-pretty truncate text-clip">Videojuego de acción-aventura basado en un concepto de plataformas mejor conocido como metroidvania.</p>
                    <div className="flex gap-4">
                        <div className="bg-yellow-500 py-[2px] px-[6px] text-sm rounded-sm">JavaScript</div>
                        <div className="bg-red-500 py-[2px] px-[6px] text-sm rounded-sm">Kaboomjs</div>
                        <div className="bg-cyan-700 py-[2px] px-[6px] text-sm rounded-sm">React</div>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://metroidvania-kaboom.vercel.app/" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">Live Demo</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/doctrine/doctrine-plain.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                        <a href="https://github.com/SaulLpz/metroidvania-kaboom" target="_blank" className="cursor-pointer">
                            <div className="tooltip">
                                <span className="tooltiptext">GitHub</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" className="w-9 h-9 hover:opacity-75 duration-150 ease-in-out"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects