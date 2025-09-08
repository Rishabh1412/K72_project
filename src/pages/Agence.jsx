import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const allLinks = [
    "https://k72.ca/uploads/teamMembers/CAMILLE_640X960_2-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_640X980-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);

  const imgRef = useRef(null);

  useGSAP(() => {
    let proxy = { index: 0 };

    gsap.to(proxy, {
      index: allLinks.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -100%",
        scrub: true,
        pin: true,
      },
      onUpdate: () => {
        const i = Math.round(proxy.index);
        if (imgRef.current) {
          imgRef.current.src = allLinks[i];
        }
      },
    });
  });

  return (
    <div>
      <div className="section-1 py-1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] overflow-hidden w-[15vw] top-36 left-[30vw] rounded-3xl"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src={allLinks[0]}
          />
        </div>
        <div className="font-[f1-500] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-black text-center uppercase leading-[17vw]">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] px-4 mt-12">
            <p className="lg:text-5xl text-2xl font-[f1-500] text-black">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-24"></div>
    </div>
  );
};

export default Agence;
