import React from 'react';
import SearchBox from '.';
import { withKnobs, text, radios } from "@storybook/addon-knobs";


export default {
  title: 'Molecules/SearchBox',
  decorators: [withKnobs],
   };

export const searchBox = () => {
  const label = text("label", "search by table");

  const sizes = {
    small: 'sm',
    large: 'lg',
  };
  const size = radios("size", sizes,"lg");
  return <SearchBox label={label} size={size}/>
  };