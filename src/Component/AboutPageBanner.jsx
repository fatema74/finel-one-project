

const AboutPageBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-16"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/xgDXT7y/istockphoto-1129713291-612x612.jpg)',
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;