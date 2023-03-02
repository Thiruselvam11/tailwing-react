import React from "react";
import EntityModule1 from "../components/EntityModule/EntityModule1/EntityModule1";

export default{
    title: "Components/EntityModule1",
    component: EntityModule1
}

const Template =  (args) =>{
    return <EntityModule1 {...args}/>;
};

export const EntityModuleOne = Template.bind({});