import React from "react";
import { Navigation } from "./Navigation";
import { Intro } from "./Intro";

export const Main = () => {
    return (
        <div className="flex h-screen"> 
            <Navigation />   
            <Intro className="flex-grow" /> 
        </div>
    );
};