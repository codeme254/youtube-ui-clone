import React, { useRef } from "react";
import Header from "../components/Header/Header";
import NextVideo from "../components/NextVideo/NextVideo";
import elonMusk from "../../src/assets/images/musk.jpg";
import zoneTour from "../../src/assets/images/zone-5.jpg";
import eastSide from "../../src/assets/videos/eastside.mp4";
import logoHiphop from "../assets/images/hiphop.jpg";
import commentImage1 from "../assets/images/user.jpg";
import ivy from "../assets/images/user-f-2.jpg";
import nathan from "../assets/images/user-m-1.jpg";
import sam from "../assets/images/user-m-2.jpg";
import fenikas from "../assets/images/user-m-3.jpg";
import dennis from "../assets/images/user-m-4.jpg";
import humphrey from "../assets/images/user-f-1.jpg";
// import ReactPlayer from 'react-player';
import ChannelDetailsPlaying from "../components/ChannelDetailsPlaying/ChannelDetailsPlaying";
import Comment from "../components/Comment/Comment";
import PublicComment from "../components/PublicComment/PublicComment";
import VideoPlayingDetais from "../components/VideoPlayingDetails/VideoPlayingDetails";

const PlayPage = function () {
  const videoRef = useRef(null);
  const handleMute = () => {
    console.log("mute will be handled");
    videoRef.current.setAttribute("muted", false);
  };
  return (
    <div>
      <Header />
      <section className="play-page">
        <section className="play-page__left">
          <div className="video__container">
            <video
              src={eastSide}
              autoPlay={false}
              loop={true}
              muted={true}
              className="video__container--video"
              onClick={handleMute}
              ref={videoRef}
            ></video>
            {/* <ReactPlayer url={eastSide} muted={true}/> */}
          </div>
          <VideoPlayingDetais 
          title="Eastside by Khalde ft Halsey, Benny Blanco"
          views="2M"
        //   releaseDate={new Date().toDateString}
          releaseDate="Dec 18, 2017"
          likes="888k"
          />
          <ChannelDetailsPlaying
            channelLogo={logoHiphop}
            channelName="Hip Hop essentials"
            subscribers="2M"
            fullDescription="Guys watch EastSide by Khaled, Benny Blanco and Halsey, please don't forget to
                    subscribe and hit the like button, also let me know in the comment if you would like to see more of these videos, am also preparing the lyric video for this video."
          />
          <section className="play-page__comments">
            <PublicComment numberOfComments="5" userAvartar={commentImage1} />
            <Comment
              commentorImage={humphrey}
              commentorName="humphrey muriungi"
              commentDate="2 weeks ago"
              comment="nice work, looking forward to the lyrical video, would you please also prepare without me  by Halsey. Also we are looking forward to a pop songs collection if you don't mind and don't forget the community we were supposed to join of the pop lovers, and we are also looking to some daily live stream of hip hop every morning as we do morning exercises"
              likes="300"
              dislikes="60"
            />
            <Comment
              commentorImage={sam}
              commentorName="samuel ochiel"
              commentDate="4 weeks ago"
              comment="thanks for the video."
              likes="212"
              dislikes="44"
            />
            <Comment
              commentorImage={ivy}
              commentorName="ivy mbogo"
              commentDate="1 month ago"
              comment="can you please upload graduation by Juic Wrld please together with the lyrical video?"
              likes="77k"
              dislikes="12"
            />
            <Comment
              commentorImage={nathan}
              commentorName="nathan warimwe"
              commentDate="1 month ago"
              comment="Great job, don't forget the lyric video for this please"
              likes="500"
              dislikes="88"
            />
            <Comment
              commentorImage={dennis}
              commentorName="dennis otwoma"
              commentDate="1 month ago"
              comment="Everyone loving hip hop or pop will agree with me that this channel deserves the world"
              likes="2k"
              dislikes="16"
            />
            <Comment
              commentorImage={fenikas}
              commentorName="fenikas ibrahim"
              commentDate="2 months ago"
              comment="Great job, can you please prepare a lyric video for this."
              likes="1K"
              dislikes="12"
            />
          </section>
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
  );
};
export default PlayPage;
