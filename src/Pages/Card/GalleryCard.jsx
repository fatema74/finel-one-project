import { Link } from "react-router-dom";


const GalleryCard = ({ data }) => {

  const { name, photo } = data;


  return (
    <div>
      <Link to="/contact">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64" src={photo} alt="wedding" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;