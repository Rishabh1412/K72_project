import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const ProjectCard = ({ src, title }) => {
  return (
    <div className="w-1/2 relative group hover:rounded-4xl overflow-hidden duration-300">
      <img className="h-full w-full object-cover" src={src} alt={title} />
      <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 bg-black/30 h-full w-full flex items-center justify-center">
        <h2 className="rounded-full border-4 leading-16 pt-1 duration-300 text-[2vw] uppercase font-[f1-300] border-white text-white px-8">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Target each row individually
    gsap.utils.toArray(".project-row").forEach((row) => {
      gsap.fromTo(
        row,
        { height: '100px' }, // collapsed start
        {
          height: '400px', // expanded target
          stagger:10,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%", // animate when row enters viewport
            end: "top 30%",   // finish as it moves up
            scrub: true,   // 🔴 remove after debugging
          },
        }
      );
    });
  });

  return (
    <div className="p-1">
      <div className="pt-[50vh]">
        <h1 className="font-[f1-500] leading-0 text-[12vw] uppercase">
          Projects
        </h1>
      </div>

      <div className="projects-wrapper">
        {/* Row 1 */}
        <div className="project-row w-full mb-2 gap-2 flex mt-16" style={{ height: 100 }}>
          <ProjectCard src="/projectImg/100temps_Thumbnail-1280x960.jpg" title="Project 1" />
          <ProjectCard src="/projectImg/crisis24_behance_1920X1200_cartes-1280x960.jpg" title="Project 2" />
        </div>

        {/* Row 2 */}
        <div className="project-row w-full mb-2 gap-2 flex" style={{ height: 100 }}>
          <ProjectCard src="/projectImg/chalaxeur-thumbnail_img-1280x960.jpg" title="Project 3" />
          <ProjectCard src="/projectImg/CF_thumbnail-1280x960.jpg" title="Project 4" />
        </div>

        {/* Row 3 */}
        <div className="project-row w-full mb-2 gap-2 flex" style={{ height: 100 }}>
          <ProjectCard src="/projectImg/Fruite_thumbnail_bbq-1280x960.jpg" title="Project 5" />
          <ProjectCard src="/projectImg/BEST_site_menu_Thumbnail-1280x960.jpg" title="Project 6" />
        </div>

        {/* Row 4 */}
        <div className="project-row w-full mb-2 gap-2 flex" style={{ height: 100 }}>
          <ProjectCard src="/projectImg/OKA_thumbnail-1280x960.jpg" title="Project 7" />
          <ProjectCard src="/projectImg/opto_thumbnail2-1280x960.jpg" title="Project 8" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
