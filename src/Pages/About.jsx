import { useLoaderData } from "react-router-dom";
import AboutPageBanner from "../Component/AboutPageBanner";
import Title from "../Pages/Title"
import AboutCard from "./Card/AboutCard";

const About = () => {
  

  const data = useLoaderData()
  console.log(data);
  
  return (
    <div>
      <AboutPageBanner></AboutPageBanner>
      <div className="my-9">
        <Title>About Us</Title>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 text-slate-500">
        <div>
          <h3 className="text-5xl font-semibold">
            Hello. Our wedding agency has been present for over 20 years in the
            market.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <p>
            As the golden sun dipped below the horizon, casting a warm glow over
            the gathered guests, the air was filled with anticipation and joy.
            <br></br>
            In the heart of a beautifully adorned venue, two souls stood at the
            threshold of a lifelong journey together. The bride,
          </p>
          <p>
            radiant in her elegant gown, walked down the aisle, her eyes locked
            with the grooms, who awaited her with a mixture of excitement and
            love.<br></br> The exchange of vows echoed through the sacred space, weaving
            promises of support, laughter companionship. 
          </p>
        </div>
      </div>

      <div>
        {
          data.map(nData =><AboutCard key={nData.id} nData={nData}></AboutCard>)
        }
      </div>
    </div>
  );
};

export default About;