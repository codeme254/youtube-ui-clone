import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchBar from './SearchBar';
import HeaderUser from './HeaderUser';
import userImage from '../../assets/images/user.jpg';
import { makeStyles } from '@material-ui/core';
// import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    hamburger: {
        width: '3rem',
        height: '3rem',
        fill: '#333'
    },
    logo: {
        width: '4rem',
        height: '4rem',
        fill: 'red',
        marginRight: '.1rem'
    },
})


const Header = () => {
    const classes = useStyles();
    return(
        <header className='header'>
            <div className="header__right u-flex-a-center">
                <div className="header__hambuger">
                    <MenuIcon className={classes.hamburger}/>
                </div>
                <div className="header__logo u-flex-a-center">
                    <YouTubeIcon className={classes.logo} />
                    <h1 className="header__logo--title"> <span>Y</span>ou<span>T</span>ube<sup>KE</sup> </h1>
                </div>
            </div>
            <SearchBar />
            <HeaderUser imageLink={userImage} />
        </header>
    )
}

export default Header;