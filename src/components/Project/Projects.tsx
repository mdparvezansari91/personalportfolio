import userInfo from "@/data/userinfo"
import Link from "next/link";
import style from "./Project.module.css"

const Project = () => {
    return (
        <>
            <div>
                <h1 className={`${style.heading}`}>Project</h1>
                <div className={`${style.projectdiv}`}>
                    {userInfo.projects.map((project) => (
                        <div className={`${style.box}`} key={project.title}>
                            <h1 className={`${style.title}`}>
                                {project.title}
                            </h1>
                            <p>
                                {project.description}
                            </p>
                            <Link href={project.url}>Visit</Link>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Project;