import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-16"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/PF6fLQ4/1000-F-305628877-FBg-LZGK6-Y94x-Pa-ED6r-Zb-A9m-KCx-UHb-NBg.jpg)',
          borderRadius: '12px',
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl italic font-bold">Concact Us</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/">
              <button className="btn bg-red-400">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;