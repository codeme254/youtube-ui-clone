import React from "react";
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

const AllPreviewVideos = () => {
    return(
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
    )
}
export default AllPreviewVideos;