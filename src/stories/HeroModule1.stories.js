import React from "react";
import HeroModule1 from "../components/HeroModule/HeroModule1/HeroModule1";



export default{
    title: "Components/HeroModule1",
    component: HeroModule1
};

const Template =  (args) =>{
    return <HeroModule1 {...args}/>;
};

export const HeroModulOne = Template.bind({});


HeroModulOne.args = {
    heading:"Timeless and comfy",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bgColor:"#FDD3B3",
    imgSrc: "https://www.linkpicture.com/q/Chair.png"
}