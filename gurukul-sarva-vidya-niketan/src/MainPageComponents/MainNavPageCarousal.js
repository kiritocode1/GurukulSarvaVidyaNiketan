import React from "react";
import { AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import laughingKids from "./kid-image-scene.jpg";


const MainPageGreenPart = (props) => {
    return (<div className="flex w-full h-[2.0rem] bg-gradient-to-l from-[#142f48]    via-[#1e8cb0]  to-[#4c44cf]  text-slate-300 font-mon justify-between items-center text-xs   transition ease-in-out duration-700 delay-1000">
        <div className="flex gap-1 items-center hover:text-white cursor-pointer">
            <a href={`https://wa.me/${props.phoneno}?text=I'm%20interested%20in%20Admissions`} className="flex gap-1 items-center hover:text-white cursor-pointer">
            <AiFillPhone className="h-3 w-4" />/<AiOutlineWhatsApp className="h-3 w-4"/>
                {props.phoneno}
            </a> 
        </div>
        <div className="hover:text-white cursor-pointer">
            <a href={`mailto: ${props.email}`} className="flex gap-1">
                <MdAlternateEmail/>
                {props.email}
            </a>
        </div>
    </div>);
};
// ? the quick brown fox jumped over the lazy dog 
const MainPageComponents = () => { 
    return (<>
        <div>
            <div className="w-full h-[50%] z-0 flex items-center absolute ">
                <h1 className="absolute z-10  flex text-center bg-invisible text-white text-7xl">hello</h1>
                <img src={laughingKids} alt="laugh" className="w-full h-[100%] z-0 " /></div>
        </div>
    </>);
};

export { MainPageComponents, MainPageGreenPart };