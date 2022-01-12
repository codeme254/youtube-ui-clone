import React from 'react';
import Header from '../components/Header/Header';
import NextVideo from '../components/NextVideo/NextVideo';
import elonMusk from '../../src/assets/images/musk.jpg';
import zoneTour from '../../src/assets/images/zone-5.jpg';

const PlayPage = () => {
    return(
        <div>
            <Header />
            <section className="play-page">
                <section className="play-page__left">
                    <h5>this is where the video and the comments come in</h5>
                </section>
                <section className="play-page__right">
                    <NextVideo
                        thumbnailLink={elonMusk} 
                        playTime="45:30"
                        title="why elon musk decided to work with prime tech africa"
                        channelName="programming prime"
                        views="33K"
                        releaseDate="6 Months ago"
                     />
                    <NextVideo
                        thumbnailLink={zoneTour} 
                        playTime="25:30"
                        title="top ten vaccation sites for you and your family this festive season"
                        channelName="travelify"
                        views="2M"
                        releaseDate="2 Months ago"
                     />
                     <NextVideo
                        thumbnailLink={elonMusk} 
                        playTime="45:30"
                        title="why elon musk decided to work with prime tech africa"
                        channelName="programming prime"
                        views="33K"
                        releaseDate="6 Months ago"
                     />
                    <NextVideo
                        thumbnailLink={zoneTour} 
                        playTime="25:30"
                        title="top ten vaccation sites for you and your family this festive season"
                        channelName="travelify"
                        views="2M"
                        releaseDate="2 Months ago"
                     />
                     <NextVideo
                        thumbnailLink={elonMusk} 
                        playTime="45:30"
                        title="why elon musk decided to work with prime tech africa"
                        channelName="programming prime"
                        views="33K"
                        releaseDate="6 Months ago"
                     />
                    <NextVideo
                        thumbnailLink={zoneTour} 
                        playTime="25:30"
                        title="top ten vaccation sites for you and your family this festive season"
                        channelName="travelify"
                        views="2M"
                        releaseDate="2 Months ago"
                     />
                </section>
            </section>
        </div>
    )
}
export default PlayPage;