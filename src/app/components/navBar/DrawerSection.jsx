'use client'
import { Link } from '@/navigation'
import React from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import NavLinks from './navLinks'

const DrawerSection = ({ bg, links, locale }) => {
    // console.log(locale)
    const navClickHandler = () => {
        document.getElementById('my-drawer-3').click()
    }
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className={`menu ${bg} min-h-full w-80 p-4`}>
                {/* Sidebar content here */}
                <p className="text-xl bold my-3">Desing me</p>
                {/* {links.map(el => <li id={el.id} key={el.id}><Link id={el.id} href={el.href} onClick={navClickHandler}>{el.name}</Link></li>)} */}
                {<NavLinks locale={locale} onClick={navClickHandler}></NavLinks>}

                <LanguageSwitcher LanguageSwitcherlocale={locale}></LanguageSwitcher>

            </ul>
        </div>
    )
}

export default DrawerSection
