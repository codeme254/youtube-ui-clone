import React, {useRef} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header__search: {
        width: '3rem',
        height: '3rem',
        fill: '#666',
        // fill: 'white',
        strokeWidth:'1px'
    },
    header__input__clear:{
        width: '2rem',
        height: '2rem',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '30',
        right: '18rem',
        cursor: 'pointer',
        // display: 'none'
    },
    hide__clear: {
        display: 'none'
    }
});
const SearchBar = () => {
    const classes = useStyles();
    const inputRef = useRef(null);
    const clearInput = () => {
        inputRef.current.value = '';
    }
    return(
        <div className="header__search">
            <input type="text" className="header__search--input" placeholder='search' ref={inputRef} />
            <div className={classes.hide__clear}>
                <CloseOutlinedIcon className={classes.header__input__clear} onClick={clearInput}></CloseOutlinedIcon>
            </div>
            <button className="header__search--button">
                <SearchIcon className={classes.header__search}></SearchIcon>
            </button>
            <button className="header__search--button">
                <MicOutlinedIcon className={classes.header__search} style={{fill: 'black'}}></MicOutlinedIcon>
            </button>
        </div>
    )
}
export default SearchBar;