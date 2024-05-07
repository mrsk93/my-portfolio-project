import Image from "next/image";
import Link from "next/link";
import React from 'react'
function Header() {
  return (
    <div className='header-section flex'>
        <div className="logo-section">
            <Link href="#">
                <Image className="logo" src={'/logo.png'} alt={"Logo"} fill={true}/>
            </Link>
        </div>
        <nav className="nav-section">
            <ul className="nav-list flex">
                <li className="nav-list-item"><Link href="#skills">Skills</Link></li>
                <li className="nav-list-item"><Link href="#experience">Experience</Link></li>
                <li className="nav-list-item"><Link href="#projects">Projects</Link></li>
                <li className="nav-list-item"><Link href="#contactMe">Contact Me</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header