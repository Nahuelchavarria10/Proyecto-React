import React from "react";
import { LINKS_HEADER } from "../utils/links";
import Anchor from "./Anchor";
import Logo from "../../public/logo.png"


const SideBar = () => {
    return (
        <>
            <header className="flex flex-col gap-10 h-screen w-60 bg-red-500">
                <div className=" flex flex-col justify-center items-center">
                    <img className="w-32 h-30" src={Logo} alt="logo" />
                    <span className="text-xl font-bold">Bankedin</span>
                </div>
                <nav className=" flex flex-col items-center gap-12 h-full w-full text-xl">
                    {LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} href={link.href} content={link.name}></Anchor>)
                    })
                    }
                </nav>
            </header>
        </>
    )
}

export default SideBar