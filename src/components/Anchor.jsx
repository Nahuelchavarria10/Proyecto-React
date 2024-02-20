import React from "react";
import { NavLink } from "react-router-dom";

const Anchor = (props) =>{
    return (
        <NavLink className="font-semibold text-slate-100" to={props.href}>{props.content}</NavLink>
    )
}

export default Anchor