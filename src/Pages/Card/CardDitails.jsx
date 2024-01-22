import { useLoaderData, useParams } from "react-router-dom";


const CardDitails = () => {
  const  {id} = useParams();

  const {items} = useLoaderData();

  const singRes = items.find((data) => data.id == id);
  console.log(singRes);
  const { title, photo_url, name, price, paragraph } = singRes;

  return (
    <div className="mb-16">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-screen" src={photo_url} alt="wedding" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{title}</h2>
          <p className="text-3xl">{name}</p>
          <p>
            <span className="text-xl">Price:</span> {price}
          </p>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDitails;