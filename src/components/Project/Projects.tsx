import userInfo from "@/data/userinfo";
import Link from "next/link";
import style from "./Project.module.css";
import Image from "next/image";

const Project = () => {
    return (
        <>
            <div id="projects" className={`${style.projectcontainer}`}>
                <h1 className={`${style.heading}`}>Projects</h1>
                <div className={`${style.projectdiv}`}>
                    {userInfo.projects.map((project, index) => (
                        <div className={`${style.box} flex gap-10`} key={index}>
                            <div className={`${style.textContainer} flex flex-col justify-between`}>
                                <h1 className={`${style.title}`}>
                                    {project.title}
                                </h1>
                                <p className="text-3xl overflow-hidden">
                                    {project.description}
                                </p>
                                <Link href={project.url}>Visit</Link>
                            </div>
                            <div className={`${style.imageContainer}`}>
                                <Image
                                    className="object-cover rounded-2xl shadow-lg shadow-slate-800"
                                    alt={project.title}
                                    fill
                                    src={project.image}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Project;