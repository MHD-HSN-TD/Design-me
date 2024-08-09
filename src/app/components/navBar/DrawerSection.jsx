import { Link } from '@/navigation'
import React from 'react'

const DrawerSection = ({ bg, links }) => {

    const navClickHandler = () => {
        document.getElementById('my-drawer-3').click()
        console.log('clicked')
    }
    // console.log(clickHandler)
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className={`menu ${bg} min-h-full w-80 p-4`}>
                {/* Sidebar content here */}
                <div>THIS IS DIV</div>
                {links.map(el => <li id={el.id} ><Link id={el.id} href={el.href} onClick={navClickHandler}>{el.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default DrawerSection
