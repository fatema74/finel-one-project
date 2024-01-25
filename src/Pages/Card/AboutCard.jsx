

const AboutCard = ({ nData }) => {
  console.log(nData);

  const { id, name, title, paragraph, photo } = nData;


  return <div>
    <h2>{id}</h2>
  </div>;
};

export default AboutCard;