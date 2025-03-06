'use client'
import Link from "next/link";
import Styles from "./Navbar.module.css";


const Navbar = () => {

    return (
        
            <div id="#home" className={`${Styles.maindiv}`}>
                <div className={Styles.logo}><h1><Link href={"#home"}>Mohammad Ansari</Link></h1></div>
                <div className={Styles.menuContainer}>
                    <ul className={Styles.menu}>
                        <li className={Styles.menuItem}><Link href={'#projects'}>Projects</Link></li>
                        {/* <li className={Styles.menuItem}><Link href={'#skills'}>Skills</Link></li> */}
                        <li className={Styles.menuItem}><Link href={`#contactus`}>Contact</Link></li>
                        
                    </ul>
                </div>
                <div className={Styles.rightDiv}>
                    {/* You can add additional content here */}
                </div>
            </div>
        
    );
};

export default Navbar;