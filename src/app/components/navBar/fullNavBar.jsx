// 'use client'
// import { clsx } from 'clsx';
import { getLocale } from "next-intl/server";
import NavBarSection from "./NavBarSection";
import DrawerSection from "./DrawerSection";




const NavBar = ({ children }) => {
    // console.log(params)
    // console.log(locale)
    const backGroundColor = 'ss'
    return (
        <div>
            <div className={`drawer  `}>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <NavBarSection bg={backGroundColor} />
                    {/* Page content here */}
                    {children}
                </div>
                <DrawerSection bg={backGroundColor} />
            </div>
        </div>
    )
}

export default NavBar
