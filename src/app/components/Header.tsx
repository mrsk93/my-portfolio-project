'use client'
import Image from "next/image";
import Link from "next/link";
import React from 'react'
function Header() {
  
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  return (
    <header>
      <div className="header-section">
        <div className="nav-bar">
          <nav className="nav-section">
            <div className="logo-section">
              <Link href="#">
                <Image
                  className="logo"
                  src={"/logo.png"}
                  alt={"Logo"}
                  fill={true}
                />
              </Link>
            </div>
            <ul className={isMenuOpen ? "nav-list active" : "nav-list"}>
              <li className="nav-list-item">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#experience">Experience</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#contactMe">Contact Me</Link>
              </li>
            </ul>
            <button
              className={isMenuOpen ? "burger-menu active" : "burger-menu"}
              type="button"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header