import React, { useEffect, useRef, useState } from "react";
import { LINKS_HEADER } from "../utils/links";
import Anchor from "./Anchor";
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
        localStorage.removeItem('token');
        dispatch(logout());
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

    const pepe = `${open ? "" : ""}`
    return (
        <>

            <aside ref={sidebarRef} className={`fixed h-full z-10 flex bg-SideBard min-h-full transition-width duration-300 ease-in-out ${open ? 'w-[200px]' : 'w-[60px] '}`}>
                <button onClick={toggleSidebar} className={`absolute transition-all duration-300 top-5 w-6 h-8 ${open ? "right-4" : " right-5"}`}>
                    <img src={Amburger} alt="" className="w-full h-full" />
                </button>
                <div className="">
                    <nav className={`relative top-20 ${open ? "left-2" : " left-2"} text-black`}>

                        {LINKS_HEADER.map((link) => {
                            return (<Anchor key={link.href} href={link.href} image={link.image} content={link.name} class={link.class} sidebarOpen={open} ></Anchor>)
                        })
                        }

                    </nav>
                    <Link to={`/Login`} onClick={handLeLogout} className={`flex items-start gap-x-2 relative top-24 ${open ? "left-2" : "left-2"}  font-bold`}>
                        
                        <img src={Logout} alt="logout" className={` duration-100 ${open ? " " : "max-w-9"}`} />
                        <p className=" text-red-500 self-center text-xl">{open ? "Logout" : ""}</p>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default SideBar