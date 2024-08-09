import NavBarSection from "./NavBarSection";
import DrawerSection from "./DrawerSection";
import { getLocale } from "next-intl/server";





const NavBar = async ({ children }) => {
    // choose the color of the navBar and the Drawer
    const backGroundColor = ' bg-primary'

    const links_EN = [
        { id: 0, href: '/', name: 'Home' },
        { id: 1, href: '/test', name: 'test' },
        { id: 2, href: '/services', name: 'services' },
        { id: 3, href: '/about', name: 'about' },
    ]
    const links_AR = [
        { id: 0, href: '/', name: 'الصفحة الرئيسية' },
        { id: 1, href: '/test', name: 'تجربة' },
        { id: 2, href: '/services', name: 'خدماتنا' },
        { id: 3, href: '/about', name: 'حول' },
    ]

    const locale = await getLocale();
    console.log('this is from the nav', locale)


    let links
    const navBarLinksLangChecker = () => {
        if (locale == 'ar') {
            links = [...links_AR]
        } else if (locale == 'en') {
            links = [...links_EN]
        } else return
    }
    // call the func
    navBarLinksLangChecker()




    return (
        <div>
            <div className={`drawer`}>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col theme-controller">
                    {/* Navbar */}
                    <NavBarSection bg={backGroundColor} links={links} locale={locale} />
                    {/* Page content here */}
                    {children}
                </div>
                <DrawerSection bg={backGroundColor} links={links} locale={locale} />
            </div>
        </div>
    )
}

export default NavBar
