import Styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={Styles.maindiv}>
            <div className={Styles.logo}>Logo</div>
            <div className={Styles.menuContainer}>
                <ul className={Styles.menu}>
                    <li className={Styles.menuItem}>Projects</li>
                    <li className={Styles.menuItem}>Skills</li>
                    <li className={Styles.menuItem}>Contact</li>
                </ul>
            </div>
            <div className={Styles.rightDiv}>
                {/* You can add additional content here */}
            </div>
        </div>
    );
};

export default Navbar;