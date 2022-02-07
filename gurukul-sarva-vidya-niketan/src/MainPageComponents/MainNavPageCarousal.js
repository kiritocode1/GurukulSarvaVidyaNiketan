import React from "react";
import { AiFillPhone } from "react-icons/ai";

const MainPageGreenPart = (props) => {
    return (<div className="flex w-full h-[2.0rem] bg-gradient-to-l from-[#142f48]    via-[#1e8cb0]  to-[#4c44cf]  text-slate-300 font-mon justify-between items-center text-xs   transition ease-in-out duration-700 delay-1000">
        <div className="flex gap-1 items-center hover:text-white cursor-pointer">
            <AiFillPhone className="h-5 w-6"/>
            {props.phoneno}
        </div>
        <div className="hover:text-white cursor-pointer">
            <a href="mailto: sanjeevanik3@gmail.com">
                {props.email}
            </a>
        </div>
    </div>);
};








const MainPageComponents = () => { 
    return (<>
    <h1>this is the  main page component page .</h1>
    </>);
};

export { MainPageComponents, MainPageGreenPart };