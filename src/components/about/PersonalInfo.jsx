import React from "react";

const personalInfoContent = [
  { meta: "name", metaInfo: "Derian Sibaja", hasColor: "" },
  { meta: "Nationality", metaInfo: "Costa Rican", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Heredia, Costa Rica", hasColor: "" },
  { meta: "phone", metaInfo: "+506 86167640", hasColor: "" },
  { meta: "Email", metaInfo: "derfelsib@gmail.com", hasColor: "" },
  { meta: "langages", metaInfo: "Spanish, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
