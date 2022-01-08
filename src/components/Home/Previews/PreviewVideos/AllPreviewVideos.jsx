import React from "react";
import Featured from "./Featured";
import PreviewVideo from "./PreviewVideo";
import tourismZone from '../../../../assets/images/zone-5.jpg';
import travelifyLogo from '../../../../assets/images/zone-3.jpg';
import hospitalLogo from '../../../../assets/images/logo-1-hos.jpg';
import ambulance from '../../../../assets/images/ambulance.jpg';
import programmingPrimeLogo from '../../../../assets/images/code.png';
import meetingImage from '../../../../assets/images/meeting.jpg';
import elonMusk from '../../../../assets/images/musk.jpg';
import webDevSimplifiedLogo from '../../../../assets/images/webDevSimplified.jpg';
import softwareEngineer from '../../../../assets/images/software-engineer.jpg';
import pregnantLady from '../../../../assets/images/pregnancy.jpg';
import coronaFeatured from '../../../../assets/images/corona.jpg';
import hiphopEssentials from '../../../../assets/images/hiphop.jpg';
import hotdog from '../../../../assets/images/hotdog.jpg';
import jumanji from '../../../../assets/images/jumanji.jpg';
import movieLogo from '../../../../assets/images/movieLogo.jpg';
import eastsideLyrics from '../../../../assets/images/eastside-lyrics.jpg';
import khalid from '../../../../assets/images/khalid.jpg';
import donWilliamsCollection from '../../../../assets/images/collection-don-williams.jpg';
import countryLogo from '../../../../assets/images/country-logo.jpg';
import musicImage from '../../../../assets/images/music.jpg';
import primeTechLogo from '../../../../assets/images/primeTechLogo.jpg';

const AllPreviewVideos = () => {
    return(
       <section className="preview__container--main">
        <section className="all-preview-videos">
           <PreviewVideo
               thumbnailPhotoPath={tourismZone}
               playTime="25:30"
               videoTitle="top ten vaccation sites of all time for you and your family in this festive season"
               channelName="travelify"
               views="2M"
               releaseDate="2 months ago"
               channelAvartarPath={travelifyLogo}
            />
            <PreviewVideo
                thumbnailPhotoPath={ambulance}
                playTime="45:30"
                videoTitle="How to stay safe from covid-19 and protect you and your family"
                channelName="healthcore"
                views="88"
                releaseDate="9 months ago"
                channelAvartarPath={hospitalLogo}
             />

             <PreviewVideo
                thumbnailPhotoPath={meetingImage}
                playTime="1:25:30"
                videoTitle="why PrimeTech is the fastest growing startup in Africa."
                channelName="Programming prime"
                views="5M"
                releaseDate="2 years ago"
                channelAvartarPath={programmingPrimeLogo}
             />
             <PreviewVideo
                thumbnailPhotoPath={elonMusk}
                playTime="45:30"
                videoTitle="why Elon Musk decided to work with PrimeTech solutions in Africa"
                channelName="Programming prime"
                views="33k"
                releaseDate="6 months ago"
                channelAvartarPath={programmingPrimeLogo}
             />
             <PreviewVideo
                thumbnailPhotoPath={softwareEngineer}
                playTime="33:30"
                videoTitle="code these 10 projects and land your first JavaScript job"
                channelName="web dev simplified"
                views="88k"
                releaseDate="7 months ago"
                channelAvartarPath={webDevSimplifiedLogo}
             />
             <PreviewVideo
                thumbnailPhotoPath={pregnantLady}
                playTime="8:23 "
                videoTitle="do these 5 things if you are pregnant for a happy foetus."
                channelName="travelify"
                views="2M"
                releaseDate="2 months ago"
                channelAvartarPath={hospitalLogo}
             />
        </section>
        <Featured imageLink={coronaFeatured} featuredTitle="covid-19" 
        featuredDescription="Get the latest Info from the WHO about COVID-19." />

         <section className="all-preview-videos">
           <PreviewVideo
               thumbnailPhotoPath={hiphopEssentials}
               playTime="3:25:30"
               videoTitle="Top hip hop mix 2022"
               channelName="Hip Hop Essentials"
               views="2M"
               releaseDate="3 months ago"
               channelAvartarPath={hiphopEssentials}
            />
            <PreviewVideo
                thumbnailPhotoPath={hotdog}
                playTime="7:42"
                videoTitle="Make a hotdog in less than 10 minutes"
                channelName="chief chef 101"
                views="3M"
                releaseDate="3 years ago"
                channelAvartarPath={hotdog}
             />

             <PreviewVideo
                thumbnailPhotoPath={jumanji}
                playTime="1:25:30"
                videoTitle="Watch Jumanji 2020 full movie"
                channelName="entertainment today"
                views="1.5M"
                releaseDate="2 years ago"
                channelAvartarPath={movieLogo}
             />
             <PreviewVideo
                thumbnailPhotoPath={eastsideLyrics}
                playTime="2:30"
                videoTitle="Eastside Lyrics"
                channelName="Khalid official"
                views="3B"
                releaseDate="3 years ago"
                channelAvartarPath={khalid}
             />
             <PreviewVideo
                thumbnailPhotoPath={donWilliamsCollection}
                playTime="2:10:30"
                videoTitle="Best Songs of Don Williams collection"
                channelName="Otwoma Counry Official"
                views="88k"
                releaseDate="3 hours ago"
                channelAvartarPath={countryLogo}
             />
             <PreviewVideo
                thumbnailPhotoPath={musicImage}
                playTime="4:23 "
                videoTitle="Introducing Music-x version 1.0.1 from PrimeTech"
                channelName="PrimeTech"
                views="2M"
                releaseDate="2 days ago"
                channelAvartarPath={primeTechLogo}
             />
        </section>
        </section>
    )
}
export default AllPreviewVideos;