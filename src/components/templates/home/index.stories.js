import React from 'react';
import LeftPanel from '../../organisms/LeftPanel';
import RightPanel from '../../organisms/RightPanel';
import VerticalLine from '../../atoms/VerticalLine';
import HomeTemplate from '.'

export default {
  title: 'HomeTemplate'
   };

export const homeTemplate = () => {
  return <HomeTemplate
  leftMenu = {<LeftPanel />}
  rightMenu = {<RightPanel />}
  divider = {<VerticalLine />}
/>
  };