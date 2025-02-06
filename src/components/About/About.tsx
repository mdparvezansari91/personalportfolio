import userInfo from "../../data/userinfo"; // Assuming userInfo is structured as shown
import styles from "./About.module.css";

const About = () => {
    return (
        <><div className={styles.container}>
            <div><h1 className={`${styles.text}`}>SKILLS</h1></div>
            <div className={`${styles.skills}`}>
                <ul>
                    {userInfo.skills.programmingLanguages.map((skill, index) => (
                        <li key={index}>{skill}</li> // Use index as key for simplicity
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}

export default About;