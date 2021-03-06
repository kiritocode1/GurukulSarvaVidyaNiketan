import React, { useState } from "react";
import {MainPageGreenPart } from "../MainPageComponents/MainNavPageCarousal";
// className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center hover:bg-white transition-all duration-[700ms]"
const Dropdown = () => {
    const DropdownItem = (props) => {
        return (<a href=" https://google.com ">
        <span className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center hover:bg-white transition-all duration-[700ms]">{props.leftIcon}</span>
            {props.children}
                <span className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center hover:bg-white transition-all duration-[700ms]">{props.rightIcon}</span>
        </a>);
    };
    return (
        <div className="items-center absolute top-[58px] w-[300px] translate-x-[-45%] p-1 row-span-full overflow-hidden">
            <DropdownItem>My PP</DropdownItem>
            <DropdownItem leftIcon={"😁"} rightIcon={"🐱"}>My PP</DropdownItem>
        </div>
    );
}
const NavbarComponent = (props) => {
    const [open, setopen] = useState(false);
    return (<>
        <li className="nav-item flex flex-col">
            < a  className ="icon-button" href=" " onClick={()=>setopen(!open)}>
                {props.icon}
            </a>
        {open && props.children}
        </li>
    </>);
};
const Navbar = (props) => {
    return (
        <>
            <MainPageGreenPart phoneno="+917219672221" email="kathawalearyan9@gmail.com"/>
            <div className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
        </div>
        {/* <MainPageComponents header="hello"/> */}
        </>
    );
};
export { Navbar, NavbarComponent,Dropdown};

