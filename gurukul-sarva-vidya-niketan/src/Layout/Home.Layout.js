import React from "react";
const HomeLayout = (props) => {
    return (
        <div>
            home Layout 
            <div>
                {props.children}
            </div>
        </div>
    );
};
export default HomeLayout;