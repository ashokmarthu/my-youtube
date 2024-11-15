import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { BUTTONS_LIST } from "../utils/constants";
const MainContainer = () => {
  return (
    <div className="flex flex-col mt-20 px-5">
      <div className="flex gap-2">
        {BUTTONS_LIST.map((id) => (
          <ButtonList id={id} />
        ))}
      </div>

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
