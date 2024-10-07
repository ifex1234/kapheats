"use client";
import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import {
  PlayArrowOutlined,
  PauseCircleFilledRounded,
} from "@mui/icons-material";

import "../styles/Intro.scss";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const meal =
    "https://bunkrynyjvxxfygoqouu.supabase.co/storage/v1/object/sign/kapheats/videomeal.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJrYXBoZWF0cy92aWRlb21lYWwubXA0IiwiaWF0IjoxNzI4MjU2NzE4LCJleHAiOjE3NTk3OTI3MTh9.ImNFwuEoAo9jgCXaN3hWPTR_TL0i8VKTj8yBdnqVFm0&t=2024-10-06T23%3A18%3A38.357Z";

  return (
    <div className="app__video">
      <video ref={vidRef} src={meal} loop controls={false} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current!.pause();
            } else {
              vidRef.current!.play();
            }
          }}
        >
          {playVideo ? <PauseCircleFilledRounded /> : <PlayArrowOutlined />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
