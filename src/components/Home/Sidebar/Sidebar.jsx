import React from 'react';
import NavMain from './NavMain';
import NavSideUser from './NavSideUser';
import Subscriptions from './Subscriptions';
import More from './More';
import Extras from './Extras';
import Links from './Links';
import Copyright from './Copyright'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <NavMain />
            <NavSideUser />
            <Subscriptions />
            <More />
            <Extras />
            <Links />
            <Copyright />
        </div>
    )
}
export default Sidebar;