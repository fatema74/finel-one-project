


const Card = ({ data }) => {
  console.log(data);
  const { title, photo_url, name, price } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64"
            src={photo_url}
            alt="wedding"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title }</h2>
          <p>{ name}</p>
          <p>{ price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;