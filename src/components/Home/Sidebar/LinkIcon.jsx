import React from 'react';

const LinkIcon = ({icon, linkName, route}) => {
    return(
        <a href={route} className="link">
            <span className="link__icon">{icon}</span>
            <span className="link__name">{linkName}</span>
        </a>
    )
}
export default LinkIcon;