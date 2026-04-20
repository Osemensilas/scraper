'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    const [showNav, setShowNav] = useState(false);
    const [activeUser, setActiveUser] = useState(true);

    const seeNav = () => {
        setShowNav(true);
    }

    const closeNav = () => {
        setShowNav(false);
    }

    return ( 
        <>
        <header className={`w-screen flex 
            ${showNav ? "h-screen fixed flex top-0 left-0 z-50 items-start justify-start" : "h-20 px-10 items-center justify-center"}
            ${pathname === "/dashboard" ? "hidden" : ""}
            `}>
            <div className={`h-full flex items-center justify-between bg-background
                ${showNav ? "w-4/5 px-5 pt-5 pb-30" : "w-full"}
                `}>
                <div className={`relative w-15 h-10
                    ${showNav ? "hidden" : ""}
                    `}>
                    <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
                </div>
                <div className={`flex gap-30
                    ${showNav ? "h-full w-full flex-col items-between justify-between" : "h-max w-max hidden sm:flex items-center"}
                    `}>
                    <ul className={`h-max w-max flex gap-4
                        ${showNav ? "flex-col items-start" : "items-center"}
                        `}>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/"} className={`text-base
                                ${pathname === "/" ? "text-primary" : "text-accent"}
                                `}>Home</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/pricing"} className={`text-base
                                ${pathname === "/pricing" ? "text-primary" : "text-accent"}
                                `}>Pricing</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/pricing" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/about-us"} className={`text-base
                                ${pathname === "/about-us" ? "text-primary" : "text-accent"}
                                `}>About Us</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/about-us" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/contact-us"} className={`text-base
                                ${pathname === "/contact-us" ? "text-primary" : "text-accent"}
                                `}>Contact Us</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/contact-us" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                    </ul>
                    <div className={`"h-max 
                        ${showNav ? "w-full" : "w-max"}
                        `}>
                        <div className={`${activeUser ? "hidden" : "block"} ${showNav ? "w-full" : "w-max"}`}>
                            <Link href="/sign-in" className={`text-base text-primary bg-primary py-2 px-4 rounded
                                ${showNav ? "bg-primary flex items-center justify-center gap-1 py-2 w-full text-center rounded" : ""}
                                `}>Sign In</Link>
                        </div>
                        <div className={`${activeUser ? "block" : "hidden"} ${showNav ? "w-full" : "w-max"}`}>
                            <Link href="/dashboard" className={`text-base text-primary relative
                                ${showNav ? "bg-primary flex items-center justify-center py-2 w-full text-center rounded" : ""}
                                `}><span className="mr-2"><i className="fa fa-dashboard"></i></span>Dashboard</Link>
                        </div>
                    </div>
                </div>
                <div onClick={seeNav} className={`hamburger sm:hidden block
                ${showNav ? "hidden" : ""}
                `}>
                    <div className="hammer"></div>
                </div>
            </div>
            <div onClick={closeNav} className={`
                ${showNav ? "w-1/5 h-full bg-foreground/70" : "hidden"}
                `}>
            </div>
        </header>
        </>
     );
}
 
export default Header;