import styles from "./Footer.module.css"
const Footer = ()=>{
    return (
        <>
        <div className={`${styles.container}`}>
            <h1>Thanks for visiting us</h1>
            <p>This Website is created using Nextjs</p>
            <p>Copyright 2020</p>
        </div>
        </>
    )
}

export default Footer;