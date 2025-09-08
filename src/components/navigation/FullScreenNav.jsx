import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const fullScreenRef = useRef(null);
  const fullNavLinksRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from(".stairing", {
      height: 0,
      stagger: 0.02, // smaller stagger = snappier
      duration: 0.01, // faster duration
      ease: "power4.inOut",
    });
    tl.to(".stairing", {
      height: "100%",
      stagger: 0.1,
      duration: 0.3,
      ease: "power4.inOut",
    });

    tl.from(
      ".link",
      {
        rotateX: 90,
        stagger: { amount: 0.15 }, // faster rollout
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.3" // start earlier, overlaps with stairs
    );

    tl.to(".link", {
      rotateX: 0,
    });

    if (navOpen) {
      fullScreenRef.current.style.display = "block";
      tl.play();
    } else {
      tl.reverse();
      fullScreenRef.current.style.display = "none";
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullScreenNav"
      className="text-white z-40 flex-col h-screen flex items-center w-full absolute top-0"
    >
      <div className="h-screen top-0 w-screen z-10 fixed">
        <div className="h-full w-full flex">
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
        </div>
      </div>

      <div
        ref={fullNavLinksRef}
        className="relative w-full z-20 h-full flex flex-col gap-16"
      >
        <div className="flex w-full top-0 items-start">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div className="w-full justify-between items-start flex">
            {/* Language toggle */}
            <div className="flex gap-1 font-[f1-500] py-1">
              <span>FR</span>
              <span className="text-gray-600">/</span>
              <span className="text-gray-600 hover:text-[#d3fd50]">EN</span>
            </div>

            {/* Cross button */}
            <button
              onClick={() => setNavOpen(false)}
              className="relative p-10 cursor-pointer group"
            >
              <div className="absolute top-0 right-0 inset-0 flex items-center justify-center">
                <div className="w-[2px] h-[7vw] bg-white rotate-45 group-hover:bg-[#d3fd50] duration-200"></div>
                <div className="w-[2px] h-[7vw] bg-white -rotate-45 group-hover:bg-[#d3fd50] duration-200"></div>
              </div>
            </button>
          </div>
        </div>
        <div id="all-links" className=" w-full h-full">
          <Link to={"/projects"}>
            <div className="link origin-top border-y-1 group relative hover:border-black border-neutral-700">
              <h1 className="font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                Projects
              </h1>
              <div className="absolute w-full overflow-hidden top-0 h-0 group-hover:h-full duration-250 flex gap-80 bg-[#d3fd50]">
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout voir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout voir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  />
                </div>
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout voir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout voir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/agence"}>
            <div className="link origin-top border-y-1 group relative hover:border-black border-neutral-700">
              <h1 className="font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                Agence
              </h1>
              <div className="absolute w-full overflow-hidden top-0 h-0 group-hover:h-full duration-250 flex gap-80 bg-[#d3fd50]">
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout Savoir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/MEGGIE_640X290_2-640x290.jpg"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout Savoir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/blank_copie_2-640x290.jpg"
                  />
                </div>
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout Savoir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour tout Savoir
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="link origin-top border-y-1 group relative hover:border-black border-neutral-700">
              <h1 className="font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                Contact
              </h1>
              <div className="absolute w-full overflow-hidden top-0 h-0 group-hover:h-full duration-250 flex gap-80 bg-[#d3fd50]">
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour Envoyer Un Fax
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>{" "}
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour Envoyer Un Fax
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>{" "}
                </div>
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour Envoyer Un Fax
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>{" "}
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Pour Envoyer Un Fax
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>{" "}
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="link origin-top border-y-1 group relative hover:border-black border-neutral-700">
              <h1 className="font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                Blogue
              </h1>
              <div className="absolute w-full overflow-hidden top-0 h-0 group-hover:h-full duration-250 flex gap-80 bg-[#d3fd50]">
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Lire Les Articles
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/ier.com-16107673482102220.gif"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Lire Les Articles
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  />
                </div>
                <div className="moveX flex gap-2 items-center text-black">
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Lire Les Articles
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/ier.com-16107673482102220.gif"
                  />
                  <h2 className="whitespace-nowrap font-[f1-500] text-[8vw] text-center leading-[0.8] pt-3 uppercase">
                    Lire Les Articles
                  </h2>
                  <img
                    className="h-18 shrink-0 object-cover rounded-full"
                    src="/navbarImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
