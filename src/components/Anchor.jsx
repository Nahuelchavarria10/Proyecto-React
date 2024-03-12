import React from "react";
import { NavLink } from "react-router-dom";

const Anchor = (props) => {
    return (
        <NavLink className={`flex items-center gap-x-3 px-5 font-semibold text-white duration-300`} to={props.href}>
            <img src={props.image} className="w-9" />
            {props.sidebarOpen && props.content }
        </NavLink>
    )
}

export default Anchor