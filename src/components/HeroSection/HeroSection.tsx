import Styles from "./HeroSection.module.css"
import RotatingCube from "../CSSEFFECTS/RotatingCube/RotatingCube";


const HeroSection = () => {
    return (
        <>
            <div className={`${Styles.background} relative h-screen fill-teal-400`}>
            <div className={`${""} flex`}>
                <h1 className={`${Styles.h1} mb-20`}>Welcome to My Portfolio</h1>
                    {/* <span className={`${Styles.nextjs}`}>Nextjs</span>
                    <span className={`${Styles.mongodb}`}>MongoDB</span>
                    <span className={`${Styles.react}`}>React</span> */}
                    <RotatingCube/>
                    </div>
                    
            </div>
        </>
    )
}

export default HeroSection;