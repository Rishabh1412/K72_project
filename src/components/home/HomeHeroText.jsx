import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[f1-300] lg:pt-12 pt-48 text-center text-white">
      <div className="lg:text-[9.5vw] text-[11vw] justify-center items-center flex uppercase leading-[9.5vw]">L'étincelle</div>
      <div className="lg:text-[9.5vw] text-[11vw] justify-center items-center flex uppercase leading-[9.5vw]">
        qui{" "}
        <span className="h-[7vw] w-[12vw] -translate-y-1.5">
          <Video rounded={'rounded-full overflow-hidden'}/>
        </span>
         {" "}génère
      </div>
      <div className="lg:text-[9.5vw] text-[11vw] justify-center items-center flex uppercase leading-[9.5vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
