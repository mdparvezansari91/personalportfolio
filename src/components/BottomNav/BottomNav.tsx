import Link from "next/link";
import style from "./BottomNav.module.css"

const BottomNav = ()=>{
    return (
        <>
        <div className={`${style.container}`}>
            <div>Logo</div>
            <div className={`${style.menu}`}>
                <ul>
                    <li><Link href={"/"}>projects</Link></li>
                    <li><Link href={"/"}>skills</Link></li>
                    
                </ul>
            </div>
            <div className={`${style.contactus}`}>
            <Link href={"/"}>contact Us</Link>
            </div>

        </div>
        </>
    )
}

export default BottomNav;
