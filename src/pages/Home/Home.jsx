import React from "react";
import { homeData,homeThirdSection} from "../../data/data"; 
// import { homeThirdSection } from "../../data/data";
import "./Home.css"


const Home = () => {
  return (
    <div>
    <section className="home">
      <h1>{homeData.header}</h1>
      <p className="paragraph-first">{homeData.first}</p>
      <p>{homeData.second}</p>
      <p>{homeData.third}</p>
    </section>
    <div className="third-section">
    <h1>{homeThirdSection.thirdFirstHeader}</h1>
        <p>{homeThirdSection.thirdSecondparagraph}</p>

    </div>
      </div>
  );
};

export default Home;
