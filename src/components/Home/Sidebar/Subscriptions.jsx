import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import mumImage from '../../../assets/images/mum.jpg';
import travelImage from '../../../assets/images/zone-3.jpg';
import citizenImg from '../../../assets/images/citizen.jpg';
import programmingImg from '../../../assets/images/code.png';
import sistersImg from '../../../assets/images/sisters.jpg';
import webDevSimplifiedImg from '../../../assets/images/webDevSimplified.jpg';
import hiphopImg from '../../../assets/images/hiphop.jpg'

import LinkImage from './LinkImage';
import LinkIcon from './LinkIcon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button__show__more:{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '3rem'
    },
    icon__show__more: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '2rem'
    },
});
const Subscriptions = () => {
    const classes = useStyles();
    return(
        <div className="subscriptions">
            <p className="title-small subscriptions__title">subscriptions</p>
            <div className="subscriptions__links">
                <LinkImage imagePath={mumImage} linkName="parenting 101" route="/"/>
                <LinkImage imagePath={travelImage} linkName="travelify" route="/"/>
                <LinkImage imagePath={citizenImg} linkName="Citizen TV Kenya" route="/"/>
                <LinkImage imagePath={programmingImg} linkName="Programming prime" route="/"/>
                <LinkImage imagePath={webDevSimplifiedImg} linkName="Web Dev Simplified" route="/"/>
                <LinkImage imagePath={sistersImg} linkName="Healthy Social Life" route="/"/>
                <LinkImage imagePath={hiphopImg} linkName="Hip Hop essentials" route="/"/>
                <LinkIcon linkName="show 208 more" route="/" icon={<KeyboardArrowDownOutlinedIcon className={classes.icon__show__more} />} />
            </div>
        </div>
    )
}
export default Subscriptions;