
import { Link } from "@/navigation"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import NavLinks from "./navLinks"
import Image from "next/image"
// import { getLocale } from "next-intl/server";
const NavBarSection = async ({ bg, locale }) => {
    // const locale = await getLocale();

    // console.log(params)
    return <nav className={`navbar ${bg} w-full justify-between`}>
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
        </div>
        <Image src='/imgs/logo-white.png'
            width='130'
            height='130' alt='DisgnMe' />
        <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
                {/* Navbar menu links here */}
                {/* {links.map(el => <li id={el.id}><Link id={el.id} href={el.href}>{el.name}</Link></li>)} */}
                {<NavLinks locale={locale}></NavLinks>}
                <LanguageSwitcher LanguageSwitcherlocale={locale}></LanguageSwitcher>

            </ul>
        </div>
    </nav>
}

export default NavBarSection