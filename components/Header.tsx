'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    const [showNav, setShowNav] = useState(false);
    const [activeUser, setActiveUser] = useState(false);

    return ( 
        <>
        <header className={`w-screen 
            ${showNav ? "h-screen fixed flex" : "h-12.5"}
            `}>
            <div className={`"h-full flex items-center justify-between p-4
                ${showNav ? "w-4/5" : "w-full"}
                `}>
                <div className="relative w-8 h-8">
                    <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
                </div>
                <div className="h-max w-max flex items-center gap-5">
                    <ul className="h-max w-max flex items-center gap-4">
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/"} className={`text-base
                                ${pathname === "/" ? "text-primary" : "text-header"}
                                `}>Home</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/pricing"} className={`text-base
                                ${pathname === "/pricing" ? "text-primary" : "text-header"}
                                `}>Pricing</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/pricing" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/about-us"} className={`text-base
                                ${pathname === "/about-us" ? "text-primary" : "text-header"}
                                `}>About Us</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/about-us" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link href={"/contact-us"} className={`text-base
                                ${pathname === "/contact-us" ? "text-primary" : "text-header"}
                                `}>Contact Us</Link>
                            <span className={`h-0.5 w-full
                                ${pathname === "/contact-us" ? "bg-primary" : ""}
                                `}></span>
                        </li>
                    </ul>
                    <div className="h-max w-max">
                        <div className={`${activeUser ? "hidden" : "block"}`}>
                            <Link href="/sign-in" className="text-base text-header">Sign In</Link>
                        </div>
                        <div className={`${activeUser ? "block" : "hidden"}`}>
                            <Link href="/dashboard" className="text-base text-header relative">Dashboard</Link>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div className={`
                ${showNav ? "w-1/5 bg-foreground/50" : "hidden"}
                `}>
            </div>
        </header>
        </>
     );
}
 
export default Header;