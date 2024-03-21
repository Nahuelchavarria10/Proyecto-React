import React, { useEffect, useRef, useState } from "react";
import { LINKS_HEADER } from "../utils/links";
import Anchor from "./Anchor";
import Logo from "../../public/logo.png"
import Amburger from "../../public/amburger.png";
import Logout from "../../public/logout.png";
import authActions from '../redux/actions/auth.actions'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { logout } = authActions;

    const handLeLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout(loggeIn));
    }

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setOpen(!open);
    };


    console.log(open);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && open) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);

    return (
        <>

            <aside ref={sidebarRef} className={`bg-SideBard flex flex-col gap-28 left-0 h-full fixed z-10 top-0 ${open ? 'w-48 lg:w-56 2xl:w-64' : 'w-[15%] md:w-[10%] lg:w-[8%] 2xl:w-[4.5%]'} duration-300`}>
                <button onClick={toggleSidebar} className={`absolute top-5 w-6 h-8 ${open ? "right-4 " : " right-5 md:right-7 lg:right-11"}`}>
                    <img src={Amburger} alt="" className="w-full h-full" />
                </button>
                <nav className={`m-auto my-28 gap-12 text-lg ${open ? "" : ""}`}>
                    <div className="">
                    {LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} href={link.href} image={link.image} content={link.name} sidebarOpen={open} ></Anchor>)
                    })
                    }
                    <Link to={`/Login`} onClick={handLeLogout} className={`${open ? "" : ""} absolute top-[90%] text-red-600 font-bold w-8 min-h-8`}>
                        <img src={Logout} alt="logout" className="w-full h-full" />
                        <p className="">{open ? "logout" : ""}</p>
                    </Link>
                        
                    </div>
                </nav>
            </aside>

        </>
    )
}

export default SideBar