import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-16"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/rM8mY36/1000-F-133399033-CNIv8h-Mi-XYKEad-Am-PBIXy1-MQv7up-Wj-PZ.jpg)',
          borderRadius: '12px',
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl italic font-bold">My Gallery</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/contact">
              <button className="btn bg-red-400">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};





export default Banner;