import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "Systems Engineering DEGREE",
    institute: "Universidad Nacional de Costa Rica",
    details: `  Study of new computer technologies and methodologies to determine the best approach to use in solving a given situation.`,
  },
  {
    year: "2023",
    degree: "Certificate Docker Admin",
    institute: "Cenfotec",
    details: `  Understands the importance and functioning of containers in information technology management. The student possesses knowledge about the fundamentals of Docker, networking, ecosystems, storage, and security.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
