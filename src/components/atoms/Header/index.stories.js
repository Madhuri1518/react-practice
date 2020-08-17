import React from 'react';
import Header from '.';
import { withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'Atoms/Header',
    decorators: [withKnobs],
};

export const header = () => {
    const title = text("label", "Heading");
    return <Header title={title}/>
};