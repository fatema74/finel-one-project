import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import HomePageBanner from "../Component/HomePageBanner";


const Home = () => {
  const {items} = useLoaderData()
  // console.log(items);
  return (
    <div>
      <div className="mb-16">
        <HomePageBanner></HomePageBanner>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-16">
        {items.map(mNews => (
          <Card key={mNews.id} data={mNews}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;