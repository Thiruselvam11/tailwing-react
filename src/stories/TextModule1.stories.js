import React from "react";
import TextModule1 from "../components/TextModule/TextModule1/TextModule1";


export default{
    title: "Components/TextModule1",
    component:TextModule1
};

const Template =  (args) =>{
    return <TextModule1 {...args}/>;
};

export const TextModulOne = Template.bind({});

TextModulOne.args = {
    heading:"Perfect Fit",
    description:"Bring out your festive personality with poise and maximise comfort by 'opting for a size larger than usual for wider feet.' Mix comfort and style with ease with the Maroon Studded Heels.",
    bgColor:"#FDD3B3"
}
