import silvestreImage from "../../assets/images/silvestre.png";
import greenPlaceImage from "../../assets/images/green-place.png";
import cetavImage from "../../assets/images/cetav.jpg";
import plantsImage from "../../assets/images/plants.jpg";
import dadJokesImage from "../../assets/images/dadJokes.jpg";
import giraImage from "../../assets/images/gira.png";
import recyclingImage from "../../assets/images/recycling-center.png";
import angelsImage from "../../assets/images/angels-flora.png";

const projects = [
  {
    id: 1,
    name: "The Restaurant",
    img: [silvestreImage],
    category: "UX/UI",
    role: "UX/UI",
    tech: "Figma",
    company: "CETAV",
    description:
      "Designing and developing a website from the ground up, I craft an engaging and functional interface that mirrors the brand identity while optimizing the user experience.",
    link: "https://www.figma.com/file/mOCCZFsvtgPsagK9lyARmA/Silvestre-Project?type=design&node-id=306%3A299&mode=design&t=TAdAiJAGoZKm0Tlm-1",
  },
  {
    id: 2,
    name: "Green Place",
    img: [greenPlaceImage],
    category: "UX/UI",
    role: "UX/UI",
    tech: "Figma",
    company: "CETAV",
    description:
      "Designing and developing a social network from the ground up, I aim to create a platform where users can seamlessly interact in an intuitive manner, complemented by an appealing interface.",
    link: "https://www.figma.com/file/NJkLQ3Qa16lf5yX9Xml2n0/Green-Place?type=design&node-id=0%3A1&mode=design&t=hIgHfR0iqxplpsSE-1",
  },
  {
    id: 3,
    name: "CETAV WebPage",
    img: [cetavImage],
    category: "Web Development",
    role: "Web developer",
    tech: "Next.js, Figma",
    company: "CETAV",
    description:
      "Main webpage for CETAV - La Libertad",
    link: "https://lalibertad-cetav.vercel.app/",
  },
  {
    id: 4,
    name: "The Perfect Plant",
    img: [plantsImage],
    category: "Web Development",
    role: "Web developer",
    tech: "HTML, CSS, JavaScript, Webpack",
    company: "CETAV",
    description:
      "The objective of the development of this site is to make plant recommendations based on the users answers in a form.",
    link: "https://github.com/BMA1656/t3-c4.git",
  },
  {
    id: 5,
    name: "Store Dad Jokes",
    img: [dadJokesImage],
    category: "Web Development",
    role: "Web developer",
    tech: "HTML, CSS, JavaScript",
    company: "CETAV",
    description:
      "The objective of this site is to create a product store withjokes, developing a product page for objects with some printed joke and a cart where customers can add and remove products before purchase.",
    link: "https://github.com/ValeriaAcuM/store-dadJokes.git",
  },
  {
    id: 6,
    name: "Itinerary Planning App",
    img: [giraImage],
    category: "UX/UI",
    role: "UX Designer",
    tech: "Miro",
    company: "Rocket Girls",
    description:
      "App designed to create custom travel itineraries basedon the user's needs and preferences. Applying the full UX process including user research, empathymapping, user personas, and user flows",
    link: "https://miro.com/app/board/uXjVISgmme4=/",
  }
  ,
  {
    id: 7,
    name: "Recycling Center",
    img: [recyclingImage],
    category: "BPM",
    role: "Business process management",
    tech: "Miro",
    company: "Rocket Girls",
    description:
      "Business process management for a recycling center, focused on improve the operative efficiency. Mapped the current process, identified inefficiencies, proposed solutions, defined KPIs, and developed a change management plan to improve material traceability and reduce errors.",
    link: "https://miro.com/app/board/uXjVIrYEqkY=/?share_link_id=570075503722",
  },
  {
    id: 8,
    name: "Angels Flora Nursery",
    img: [angelsImage],
    category: "Content Creator",
    role: "Social Media Content Creator",
    tech: "Canva",
    company: "Rocket Girls",
    description:
      "Designed brand identity for a plant nursery, including logo and business card design, selection of typography and color scheme, and creation of social media content. The goal was to create a cohesive and visually appealing brand presence that reflects the nursery's values and offerings.",
    link: "https://www.canva.com/design/DAGZPMYaRsw/G5OUshUZiZV8HSOT2hwnBw/edit?utm_content=DAGZPMYaRsw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
]

export default projects;