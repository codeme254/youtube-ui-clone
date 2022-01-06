import React from "react";
import PreviewVideo from "./PreviewVideo";
import tourismZone from '../../../../assets/images/zone-5.jpg';
import travelifyLogo from '../../../../assets/images/zone-3.jpg';

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
        </section>
    )
}
export default AllPreviewVideos;