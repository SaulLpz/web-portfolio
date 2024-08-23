import { technologies } from "../../utils/technologies";

const Technologies = () => {
  return (
    <div className="col-span-12 md:col-span-6 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
        <div className="w-full h-full grid grid-rows-3 grid-cols-4 lg:grid-rows-2 lg:grid-cols-6 text-white text-sm xl:text-base font-semibold lg:font-bold justify-center items-center">
        {
            technologies.map((tech, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                    <img src={tech.img} alt="Technologie Icon" className="h-12 xl:h-14"/>
                    <p>{tech.name}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Technologies