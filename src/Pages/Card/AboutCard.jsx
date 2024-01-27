import { Link } from "react-router-dom";


const AboutCard = ({ nData }) => {
  console.log(nData);

  const { name, title, paragraph, photo } = nData;


  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <h2 className="card-title">{title}</h2>
          <p>{paragraph}</p>
          <div className="card-actions my-4">
            <Link to={'/contact'}>
              <button className="btn bg-red-400">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;