import React from "react";
import EntityModule2 from "../components/EntityModule/EntityModule2/EntityModule2";

export default{
    title: "Components/EntityModule2",
    component: EntityModule2
}

const Template =  (args) =>{
    return <EntityModule2 {...args}/>;
};

export const EntityModuleTwo = Template.bind({});