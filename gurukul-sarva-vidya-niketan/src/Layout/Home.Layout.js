import React from "react";
import { MainPageComponents } from "../MainPageComponents/MainNavPageCarousal";
const HomeLayout = (props) => {
    return (
        <div className="flex flex-col ">
            <div className="w-full   h-[50%] absolute">
            <MainPageComponents header="hii"/>
            </div>
            <div className="mt-[26%] text-9xl ">
                home Layout
                {props.children}
            </div>
            
        </div>
    );
};
export default HomeLayout;