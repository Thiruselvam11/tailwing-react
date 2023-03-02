import React from "react";
import HeroModule2 from "../components/HeroModule/HeroModule1/HeroModule2";

export default {
    title: "Components/HeroModule2",
    component: HeroModule2
}

const Template =  (args) =>{
    return <HeroModule2 {...args}/>;
};

export const HeroModuleTwo = Template.bind({});