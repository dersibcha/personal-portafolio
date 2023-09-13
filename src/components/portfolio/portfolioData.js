import Image1 from "../../../public/assets/img/portfolio/icchaportafolio.png";
import Image2 from "../../../public/assets/img/portfolio/myportafolio.png";
import Image3 from "../../../public/assets/img/portfolio/i18portafolio.png";
import Image4 from "../../../public/assets/img/portfolio/certportafolio.png";
import Image5 from "../../../public/assets/img/portfolio/pixalartportafolio.png";


const PortfolioData = [
  {
    id: 1,
    type: "website project",
    image: Image1,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "ICCHA Technologies",
        language: "HTML, CSS, JS, React, NextJs",
        preview: "www.iccha-technologies.com",
        link: "https://www.iccha-technologies.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Git Project",
    image: Image2,
    tag: ["git"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Portafolio",
        language: "HTML, SCSS, JS, React, NextJs",
        preview: "dersibcha/personal-portafolio",
        link: "https://github.com/dersibcha/personal-portafolio",
      },
    ],
  },
  {
    id: 3,
    type: "Git Project",
    image: Image3,
    tag: ["git"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "i18n-NextJS",
        language: "React, NextJs",
        preview: "dersibcha/i18n-NextJS",
        link: "https://github.com/dersibcha/i18n-NextJS",
      },
    ],
  },
  {
    id: 4,
    type: "Certificate",
    image: Image4,
    tag: ["certificate"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Docker Admin certification",
        language: "Docker",
        preview: "www.credly.com/badges",
        link: "https://www.credly.com/badges/28edf9a2-04a2-46b2-90fd-366c5b46970c/public_url",
      },
    ],
  },
  {
    id: 5,
    type: "Art Project",
    image: Image5,
    tag: ["art"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Pixel Art",
        preview: "www.pixilart.com",
        link: "https://www.pixilart.com/art/computer2-sr25187de6e1199?ft=user&ft_id=1299167",
      },
    ],
  },
];

export default PortfolioData;
