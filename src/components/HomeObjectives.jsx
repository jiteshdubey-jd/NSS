import { useRef } from "react";
import HomeImages from "../assets/home/index";
import HomeImagesReduced from "../assets/home_reduced/index";
import "../styles/home/objectives.css";
import Image from "../containers/Image";
import useScrollVisibility from "../hooks/useScrollAnimation";

const objectiveText = [
  {
    image: HomeImages.community,
    simple_image: HomeImagesReduced.community_simple,
    title: "Community Understanding",
    description:
      "Community understanding involves mutual empathy, cooperation, and shared values among group members, fostering inclusivity and collaboration towards common goals. NSS plays a key role in promoting this through service, social engagement, and youth development initiatives, enhancing community cohesion and individual growth.",
  },
  {
    image: HomeImages.assesment,
    simple_image: HomeImagesReduced.assesment_simple,
    title: "Assesment & Engagement",
    description:
      "NSS facilitates assessment for informed decision-making and empowerment. It fosters collaboration and drives positive change in individuals and communities. Meaningful engagement supports continuous improvement.",
  },
  {
    image: HomeImages.competance,
    simple_image: HomeImagesReduced.competance_simple,
    title: "Competence Development",
    description:
      "Competence development is about improving skills, knowledge, and abilities for personal and professional growth. It requires continuous learning, practice, and adapting to new experiences. NSS ensures individuals expand capabilities to excel in roles, contribute to teams, and face challenges confidently.",
  },
  {
    image: HomeImages.leadership,
    simple_image: HomeImagesReduced.leadership_simple,
    title: "Leadership & Democracy",
    description:
      "Democratic leadership entails integrity, inclusive participation, and valuing diverse perspectives. Leaders trained in NSS empower citizens through transparency, accountability, and active engagement. Democracy flourishes with leaders who champion equality, justice, and individual rights, ensuring government by and for the people.",
  },
];

export default function Objectives() {
  const objectivesTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(objectivesTitleRef, sliderRef);
  return (
    <section
      className={`home-objective-container ${isVisible ? "appear" : ""}`}
      ref={objectivesTitleRef}
    >
      <h2 className={isVisible ? "home-objective-header" : ""} ref={sliderRef}>
        Our Objectives
      </h2>
      <p className="home-objective-quote">
        The focus is on enhancing the quality of educated manpower through the
        cultivation of social responsibility. This entails elevating both
        material and moral aspects of society by preparing students for
        dedicated service to the nation. By immersing urban students in rural
        life, they gain first hand exposure to the community around their
        institution. The objective is to make the campus responsive to community
        needs, establishing a constructive link between technical education and
        the social and economic reconstruction of the country. This involvement
        contributes to national development and fosters a deeper understanding
        and appreciation of societal issues, encouraging active community
        participation.
      </p>
      <div className="home-objective-cards-container">
        {objectiveText.map((text) => (
          <div key={text.title} className="home-objective-card">
            <div className="home-objective-card-image">
              <Image
                simple_image={text.simple_image}
                HD_image={text.image}
                alt={text.title}
              />
            </div>
            <div className="home-objective-card-text ">
              <h2>{text.title}</h2>
              <p>{text.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
