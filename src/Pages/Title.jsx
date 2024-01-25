

const Title = ({ children }) => {
  return <div className="mx-auto pt-3 mt-10 relative border-s-8 ps-4">
    <h2 className="text-6xl font-bold">{children}</h2>
    <h2 className="text-8xl absolute opacity-10 -z-10 font-bold bottom-0">{children}</h2>
  </div>;
};

export default Title;