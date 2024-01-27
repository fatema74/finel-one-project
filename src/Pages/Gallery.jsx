import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import GalleryCard from "./Card/GalleryCard";
import Title from "./Title";


const Gallery = () => {
  const data = useLoaderData()
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <Title>My Gallery</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mb-16">
        {
          data.map(data=><GalleryCard key={data.id} data={data}></GalleryCard>)
        }
      </div>
    </div>
  );
};

export default Gallery;