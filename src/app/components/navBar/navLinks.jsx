"use client"
import { Link } from "@/navigation";

const NavLinks = ({ locale, onClick }) => {

    const links_EN = [
        { id: 0, href: "/", name: "Home" },
        { id: 1, href: "/test", name: "test" },
        { id: 2, href: "/services", name: "services" },
        { id: 3, href: "/about", name: "about" },
        { id: 3, href: "/about", name: "about" },
    ];
    const links_AR = [
        { id: 0, href: "/", name: "الصفحة الرئيسية" },
        { id: 1, href: "/test", name: "تجربة" },
        { id: 2, href: "/services", name: "خدماتنا" },
        { id: 3, href: "/about", name: "حول" },
        { id: 3, href: "/about", name: "حول" },
    ];
    let links
    const navBarLinksLangChecker = (locale) => {
        if (locale == "ar") {
            links = [...links_AR];
            return links
        } else if (locale == "en") {
            links = [...links_EN];
            return links

        } else return;
    }
    links = navBarLinksLangChecker(locale)
    return (
        <>
            {links.map(el => <li id={el.id} key={el.id}><Link
                id={el.id}
                key={el.id}
                href={el.href}
                onClick={onClick}
            >{el.name}</Link></li>)}

        </>
    )
}

export default NavLinks