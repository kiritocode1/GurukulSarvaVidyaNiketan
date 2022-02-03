import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../Layout/Home.Layout";




const DefaultHOC = ({ element, ...HOCprops }) => {
    const Element = element;
    // const Element = (elementy, ...funcprops) => {
    //     const mine = element;
    //     return <elementy {...funcprops}/>;
    // };
    return (
        <>
            <Route
                {...HOCprops}
                element={(props) => {
                    return (
                        // <DefaultLayout component={Element(mine,...props)}/>
                        <DefaultLayout>
                            <Element {...props} />
                        </DefaultLayout>
                    );
                }}
            />
        </>
    );
};
export default DefaultHOC;