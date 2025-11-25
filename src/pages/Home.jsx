import { Contact, Hero, Portfolio, Resume, Skill } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      {/* <Service /> */}
      <Portfolio />
      <Resume />
      <Skill />
      {/* <Testimonial />
      <Blog /> */}
      <Contact />
    </>
  );
};
