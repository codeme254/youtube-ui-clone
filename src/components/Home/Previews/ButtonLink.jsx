import React from 'react';

const ButtonLink = ({route, linkName, active}) => {
    return(
        // <a href={route} className={active === true ? "button-link button-link__active": "button-link"}> {linkName} </a>
        <a href={route} className="button-link"> {linkName} </a>
    )
}
export default ButtonLink;