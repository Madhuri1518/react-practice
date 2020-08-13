import React from 'react';
import Home from '../../components/templates/home';
import LeftPanel from '../../components/organisms/LeftPanel';
import RightPanel from '../../components/organisms/RightPanel';
import VerticalLine from '../../components/atoms/VerticalLine';

export default function HomePage() {
    return (
        <Home
            leftMenu = {<LeftPanel />}
            rightMenu = {<RightPanel />}
            divider = {<VerticalLine />}
        />
    )
}
