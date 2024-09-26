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
        <header>
            <div className="container">
                <nav className="twelve columns">
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

                    {/* Mobile */}
                    <button 
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
                    <div 
                        className={`ham-menu ${menuOpen?"active":""}`}
                    >
                        <ul>
                            <li>
                                <Link 
                                    href="/"
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/beispielseite-1"
                                >
                                    Beispielseite 1
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/beispielseite-2"
                                >
                                    Beispielseite 2
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar