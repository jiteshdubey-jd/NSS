import Image from "../containers/Image";
import "../styles/team/creativesteam.css";

const TeamCreativeTeam = ({ simple_image, hd_image, name, text }) => {
  return (
    <section className="">
      <div className="teams_container">
        <h1 className="teams-info">{name}</h1>
      </div>
      <div className="team-creatives">
        <div className="team-creatives-image-container">
          <div className="teams-image-container">
            <Image simple_image={simple_image} HD_image={hd_image} alt={name} />
          </div>
          <div className="team-creatives-text-container">
            <h2>{name}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCreativeTeam;
