import React from 'react';
import Header from '.';
import { withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'Header',
    decorators: [withKnobs],
};

export const verticalLine = () => {
    const title = text("label", "Heading");
    return <Header title={title}/>
};