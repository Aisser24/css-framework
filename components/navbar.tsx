"use client"

import logo from "../images/logo.svg"
import Image from "next/image"
import React from "react";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header style={{zIndex: "1000"}}>
            <nav className="mobile">
                <Link href={"/"}>
                    <Image
                        width={100}
                        height={50}
                        src={logo}
                        alt="Apollo Club Logo"
                        priority
                        style={{
                            zIndex: "100"
                        }}
                    />
                </Link>

                {/* Mobile */}
                <div className="ham">
                    <button 
                        aria-label="Toggle Navigaiton-Menu"
                        className={`hamburger hamburger--squeeze ${menuOpen?"is-active":""}`} 
                        type="button" 
                        onClick={handleMenuClick}
                        style={{
                            padding: "0px 0px", 
                            display: "grid", 
                            placeItems: "center",
                            zIndex: "100"
                        }}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div 
                    className={`ham-menu ${menuOpen?"active":""}`}
                >
                    <ul style={{display: menuOpen ? "flex" : "none"}}>
                        <li>
                            <Link 
                                href="/"
                                className="menu-text"
                                onClick={handleMenuClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/beispielseite1"
                                className="menu-text"
                                onClick={handleMenuClick}
                            >
                                Beispielseite 1
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/beispielseite2"
                                className="menu-text"
                                onClick={handleMenuClick}
                            >
                                Beispielseite 2
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
                    
            <div className="container">
                <nav className="desktop">
                    <Link href={"/"}>
                        <Image
                            width={100}
                            height={50}
                            src={logo}
                            alt="Apollo Club Logo"
                            priority
                            style={{
                                zIndex: "100"
                            }}
                        />
                    </Link>
                    
                    {/* Desktop */}
                    
                    <ul className="nav-desktop">
                        <li>
                            <Link 
                                href="/"
                                className="menu-text"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/beispielseite1"
                                className="menu-text"
                            >
                                Beispielseite 1
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/beispielseite2"
                                className="menu-text"
                            >
                                Beispielseite 2
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar