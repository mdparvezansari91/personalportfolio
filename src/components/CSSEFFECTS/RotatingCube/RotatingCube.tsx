import styles from "./RotatingCube.module.css";

const RotatingCube = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.boxcard}>
                    <div className={`${styles.face} ${styles.front}`}>React</div>
                    <div className={`${styles.face} ${styles.back}`}>MongoDB</div>
                    <div className={`${styles.face} ${styles.right}`}>Nextjs</div>
                    <div className={`${styles.face} ${styles.left}`}>Javascript</div>
                    {/* <div className={`${styles.face} ${styles.top}`}>CSS</div>
                    <div className={`${styles.face} ${styles.bottom}`}>Bottom</div> */}
                </div>
            </div>
        </>
    );
};

export default RotatingCube;