import React, { useState } from "react";
import { LINKS_HEADER } from "../utils/links";
import Anchor from "./Anchor";
import Logo from "../../public/logo.png"
import Amburger from "../../public/amburger.png";


const SideBar = () => {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen(!open);
    };
    return (
        <>

            <aside className={`bg-SideBard flex flex-col gap-28 h-screen relative ${open ? 'w-72' : 'w-20'} duration-300`}>
                <button onClick={toggleSidebar} className={`absolute border-black top-5 w-7 h-10 ${open ? "right-5 " : " right-[25px]" }`}>
                    <img src={Amburger} alt="" className="w-full h-full" />
                </button>
                <div className=" flex flex-col justify-center items-center">

                    {/* <img className="w-32 h-30" src={Logo} alt="logo" /> */}

                    
                </div>
                <nav className="flex flex-col gap-12 text-xl">
                    {LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} href={link.href} image={link.image} content={link.name} sidebarOpen={open} ></Anchor>)
                    })
                    }
                </nav>
                
            </aside>
        </>
    )
}

export default SideBar