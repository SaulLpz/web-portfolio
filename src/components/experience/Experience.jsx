import { mvp, goose } from "../../utils/experience";

const Experience = () => {
  return (
    <>
    <div className="col-span-12 lg:col-span-6 lg:row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
            <div className="h-full w-full flex flex-col justify-evenly items-start px-4">
                    <div className="">
                        <p className="font-bold">{goose.name}</p>
                        
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <p className="font-semibold">{goose.title}</p>
                        <p className="text-sm">{goose.start} - {goose.end} ({goose.duration})</p>
                    </div>
                    <div>
                    {
                        goose.description.map((desc, index) => (
                            <p key={index} className="text-sm">- {desc}</p>
                        ))
                    }
                    </div>
                    <div className="md:flex hidden md:visible">
                        <p className="text-sm font-semibold">Tecnologías:</p>
                        <div className="flex">
                            {
                                goose.technologies.map((tech, index) => (
                                    <p key={index} className="ml-1 text-sm"><span className="font-bold">· </span> {tech}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center backdrop-filter bg-opacity-20">
            <div className="h-full w-full flex flex-col justify-evenly items-start px-4">
                <div className="">
                    <p className="font-bold">{mvp.name}</p>
                    
                </div>
                <div className="flex w-full justify-between items-center">
                    <p className="font-semibold">{mvp.title}</p>
                    <p className="text-sm">{mvp.start} - {mvp.end} ({mvp.duration})</p>
                </div>
                <div>
                {
                    mvp.description.map((desc, index) => (
                        <p key={index} className="text-sm">- {desc}</p>
                    ))
                }
                </div>
                <div className="md:flex hidden md:visible">
                    <p className="text-sm font-semibold">Tecnologías:</p>
                    {
                        mvp.technologies.map((tech, index) => (
                            <p key={index} className="ml-1 text-sm"><span className="font-bold">· </span> {tech}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience