"use client"
import React from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import NavLinks from '../navBar/navLinks'
import Image from 'next/image'


const Footer = ({ locale }) => {
    return (
        <footer className="footer bg-primary text-base-content p-4">
            <aside
            // className="lg:w-30  lg:h-30  w-60 h-60 relative"
            >
                <Image src='/imgs/logo-white.png'
                    // className=" object-contain"
                    width={'200'}
                    height='200'
                    // fill={true}
                    alt='DisgnMe' />
                <p>
                    Desing me Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>

            {/* <h6 className="footer-title">Desing me  </h6> */}
            <nav className="menu">
                <li className='text-lg'>Links</li>
                {<NavLinks locale={locale}></NavLinks>}
                <LanguageSwitcher LanguageSwitcherlocale={locale}></LanguageSwitcher>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer