import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <>
            <div className={`${styles.main}`}>
                <div className={`${styles.text}`}>Nodejs</div>
                <div className={`${styles.text}`}>React</div>
                <div className={`${styles.text}`}>Nextjs</div>
                <div className={`${styles.text}`}>Mongodb</div>
            </div>
        </>
    );
}

export default Skills;