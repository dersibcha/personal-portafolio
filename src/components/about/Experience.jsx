import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: " Software Engineer",
    compnayName: "ICCHA Technologies",
    details: [`Worked in www.iccha-technologies.com development relying on React, and NextJS.`,
              `Full stack development using React, MongoDB, and NodeJS in a social media web application.`,
              `Full stack development using React, NextJS, Strapi, and Stripe in an hotel web application.`]
  },
  {
    year: "2022 - 2023",
    position: " Software Engineer",
    compnayName: "3 Pillar Global",
    details: [`Full stack development in a microservices structure, using React, TS, NodeJs, MongoDB, and Socket.io in an event host web application.`,
              `Working with agile methodologies.`]
  },
  {
    year: "2019 - 2022",
    position: " Front-end Developer ",
    compnayName: "Accenture",
    details: [`Front-end development using Angular and TS for an internal project.`,
              `Front-end development using React and NodeJS for an internal project.`,
              `Email developing in Salesforce Marketing Cloud platform.`]
  },
    {
    year: "2018",
    position: " Software Engineer",
    compnayName: "Intel",
    details: [`Security tools support and development rely on, SCSS, Angular, .Net, SQL, Windows Server 2012, Web API, Entity Framework.`]
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          {val?.details?.map((detail,j) => {
              return <p className="open-sans-font" key={`exp-${i}-${j}`}>&#x2022; {detail}</p>
            })
          }
        </li>
      ))}
    </ul>
  );
};

export default Experience;
