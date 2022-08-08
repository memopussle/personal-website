import video1 from "../../../img/travelwebsite.mp4";
import HoverVideoPlayer from "react-hover-video-player";
import {
  PausedOverlay1,
  PausedOverlay2,
  PausedOverlay3,
} from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import video2 from "../../../img/overthesea.mp4";
import video3 from "../../../img/crypto-app.mp4";
import "../Project.scss";
import { FaGithub, FaYoutube } from "react-icons/fa";
import GradientSvg from "../../LandingPage/GradientSvg";

const Videos = () => {
  return (
    <>
      <div className="video">
        <div className="video--1">
          <a className="transparent-button" href="http://localhost:3000/">
            <HoverVideoPlayer
              videoSrc={video1}
              pausedOverlay={<PausedOverlay1 />}
              loadingOverlay={<LoadingOverlay />}
            />
          </a>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni{" "}
          </p>
          <div>
            <button className="normal-button">SEE MORE</button>
            <button className="transparent-button">
              <FaGithub
                size={30}
                style={{ fill: "url(#more-blue-gradient)" }}
              />
            </button>

            <FaYoutube
              size={30}
              style={{ fill: "url(#more-purple-gradient)" }}
            />
          </div>
        </div>
        <div className="video--2">
          <HoverVideoPlayer
            videoSrc={video2}
            pausedOverlay={<PausedOverlay2 />}
            loadingOverlay={<LoadingOverlay />}
          />
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
        </div>
        <div className="video--3">
          <HoverVideoPlayer
            videoSrc={video3}
            pausedOverlay={<PausedOverlay3 />}
            loadingOverlay={<LoadingOverlay />}
          />
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
