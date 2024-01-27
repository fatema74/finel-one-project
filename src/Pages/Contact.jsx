import ContactBanner from "../Component/ContactBanner";
import ContactCardRightm from "../Component/ContactCardRightm";
import ContactCard from "./Card/ContactCard";
import Title from "./Title";


const Contact = () => {
  return (
    <div>
      <div>
        <ContactBanner></ContactBanner>
      </div>
      <Title>Contact us</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <ContactCard></ContactCard>
        </div>
        <div>
          <ContactCardRightm></ContactCardRightm>
        </div>
      </div>
    </div>
  );
};

export default Contact;