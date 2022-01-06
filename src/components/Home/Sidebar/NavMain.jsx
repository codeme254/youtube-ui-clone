import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';

import LinkIcon from './LinkIcon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    side__logo__main: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '2rem'
    },
});
const NavMain = () => {
    const classes = useStyles();
    return(
        <nav className="nav-main">
            <LinkIcon className={classes.active__link} route="" linkName="home" icon={<HomeIcon className={classes.side__logo__main} />} />
            <LinkIcon route="" linkName="explore" icon={<ExploreOutlinedIcon className={classes.side__logo__main} />} />
            <LinkIcon route="" linkName="subscriptions" icon={<SubscriptionsOutlinedIcon className={classes.side__logo__main} />} />
        </nav>
    )
}
export default NavMain;