import styles from "./Button.module.css"

const Button = () => {

    return (
        <>
            <div className={`${styles.centerdiv}`}>
                <button className={`${styles.revolvingbutton}`}>Click Me!</button>
            </div>
        </>
    )
}


export default Button;