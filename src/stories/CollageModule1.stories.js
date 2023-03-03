import React from "react";
import CollageModule1 from "../components/CollageModule/CollageModule1/CollageModule1";

export default {
    title:"components/CollageModule1",
    component:CollageModule1
}

const Template =  (args) =>{
    return <CollageModule1 {...args}/>;
};

export const CollageModulOne = Template.bind({});