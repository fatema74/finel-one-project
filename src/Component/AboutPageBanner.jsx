import { Link } from "react-router-dom";


const AboutPageBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-16"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/2vCG6NS/1000-F-175506473-h-Fi-OUm5-OGHlk1n-QCRQIOcm-LDZmx-CWs-E4.jpg)',
          borderRadius: '12px',
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl italic font-bold">About Us</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/gallery">
              <button className="btn bg-red-400">My Gallary</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;