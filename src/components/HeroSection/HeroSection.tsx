import Image from "next/image";
import Styles from "./HeroSection.module.css"


const HeroSection = ()=>{
    return (
        <>
        <div className={`${Styles.background}`}>
        <Image
      src="/BannerHeroBackground.png"
      width={1000}
      height={500}
      alt="Picture of the author"
    />

        </div>
        </>
    )
}

export default HeroSection;