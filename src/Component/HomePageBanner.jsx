import { Link } from "react-router-dom";



const HomePageBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/pnGGdP7/wedding-2595862-1920.jpg)',
          borderRadius: '12px',
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/about">
              <button className="btn bg-red-400">About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;