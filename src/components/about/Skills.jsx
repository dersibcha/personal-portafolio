import Image from "next/image";
import React from "react";
import HtmlImage from "../../../public/assets/img/skills/html.svg";
import JSImage from "../../../public/assets/img/skills/js.svg";
import CSSImage from "../../../public/assets/img/skills/css.svg";
import ReactImage from "../../../public/assets/img/skills/react.svg";
import NextJSImage from "../../../public/assets/img/skills/nextjs.svg";
import NodeJSImage from "../../../public/assets/img/skills/nodejs.svg";
import DotNetImage from "../../../public/assets/img/skills/dotnet.svg";
import AngularImage from "../../../public/assets/img/skills/angular.svg";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML", imageSrc: HtmlImage },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT", imageSrc: JSImage },
  { skillClass: "p85", skillPercent: "85", skillName: "CSS", imageSrc: CSSImage },
  { skillClass: "p95", skillPercent: "95", skillName: "React", imageSrc: ReactImage },
  { skillClass: "p85", skillPercent: "85", skillName: "NextJS", imageSrc: NextJSImage },
  { skillClass: "p85", skillPercent: "80", skillName: "NodeJS", imageSrc: NodeJSImage },
  { skillClass: "p65", skillPercent: "65", skillName: ".Net", imageSrc: DotNetImage },
  { skillClass: "p65", skillPercent: "65", skillName: "Angular", imageSrc: AngularImage },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          {/*<div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>*/}
          <div className="d-flex justify-content-center">
            <Image width={150} height={150} src={val.imageSrc} alt=""/>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
