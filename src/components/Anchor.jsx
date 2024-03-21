import React from "react";
import { NavLink } from "react-router-dom";

const Anchor = (props) => {
    return (
        <NavLink className={`flex items-center gap-x-2 py-5 font-semibold text-white`}  to={props.href}>
            <img src={props.image} className="w-8" />
            <p className="">{props.sidebarOpen ? props.content : ""} </p>
        </NavLink>
    )
}

export default Anchor