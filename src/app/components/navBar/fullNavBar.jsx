import NavBarSection from "./NavBarSection";
import DrawerSection from "./DrawerSection";
import { getLocale } from "next-intl/server";




const NavBar = async ({ children }) => {
    // choose the color of the navBar and the Drawer
    const backGroundColor = ' bg-primary'


    const locale = await getLocale();






    return (
        <div>
            <div className={`drawer`}>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col theme-controller">
                    {/* Navbar */}
                    <NavBarSection bg={backGroundColor} locale={locale} />
                    {/* Page content here */}
                    {children}
                </div>
                <DrawerSection bg={backGroundColor} locale={locale} />
            </div>
        </div>
    )
}

export default NavBar
