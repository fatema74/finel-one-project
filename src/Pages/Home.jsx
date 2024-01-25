import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import HomePageBanner from "../Component/HomePageBanner";
import { useState } from "react";
import Title from "./Title";


const Home = () => {
  const { items } = useLoaderData()
  // console.log(items);


  const [limite, setLimite] = useState(6);


  const handleClick = () => {
    setLimite(limite + 3)
  }


  return (
    <div>
      <div className="mb-16">
        <HomePageBanner></HomePageBanner>
      </div>
      <div className="my-9">
        <Title>Our Home</Title>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mb-16">
        {items.slice(0, limite).map(mNews => (
          <Card key={mNews.id} data={mNews}></Card>
        ))}

        {limite < items.length && (
          <div className="text-center my-10">
            <button onClick={handleClick} className="btn">
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;