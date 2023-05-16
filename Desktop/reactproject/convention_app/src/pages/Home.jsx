import React from "react";
import ConventionCard from "../components/ConventionCard";
import "../pages/HomeCss.css";

function Home() {
  const data = [
    {
      img: "https://th.bing.com/th/id/R.64f4bc89390b5bf8a6a56524b1517459?rik=eJeA7RLe89rxyQ&riu=http%3a%2f%2fwww.vectorfree.com%2fmedia%2fvectors%2fpizza-slice-logo.jpg&ehk=S9uppQC88D3tqoz2X4YRpzAd%2bM%2fuU9E6rzSeM8ZJ7Zk%3d&risl=&pid=ImgRaw&r=0",
      time: "11:00",
      place: "New York",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, accusantium! Nulla eius fuga facilis cum, architecto facere modi debitis possimus quod, sed ullam quia libero quibusdam exercitationem tenetur magnam dolorem.",
    },
    {
      img: "https://th.bing.com/th/id/R.64f4bc89390b5bf8a6a56524b1517459?rik=eJeA7RLe89rxyQ&riu=http%3a%2f%2fwww.vectorfree.com%2fmedia%2fvectors%2fpizza-slice-logo.jpg&ehk=S9uppQC88D3tqoz2X4YRpzAd%2bM%2fuU9E6rzSeM8ZJ7Zk%3d&risl=&pid=ImgRaw&r=0",
      time: "11:00",
      place: "Sacramento",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, accusantium! Nulla eius fuga facilis cum, architecto facere modi debitis possimus quod, sed ullam quia libero quibusdam exercitationem tenetur magnam dolorem.",
    },
    {
      img: "https://th.bing.com/th/id/R.64f4bc89390b5bf8a6a56524b1517459?rik=eJeA7RLe89rxyQ&riu=http%3a%2f%2fwww.vectorfree.com%2fmedia%2fvectors%2fpizza-slice-logo.jpg&ehk=S9uppQC88D3tqoz2X4YRpzAd%2bM%2fuU9E6rzSeM8ZJ7Zk%3d&risl=&pid=ImgRaw&r=0",
      time: "11:00",
      place: "New York",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, accusantium! Nulla eius fuga facilis cum, architecto facere modi debitis possimus quod, sed ullam quia libero quibusdam exercitationem tenetur magnam dolorem.",
    },
    {
      img: "https://th.bing.com/th/id/R.64f4bc89390b5bf8a6a56524b1517459?rik=eJeA7RLe89rxyQ&riu=http%3a%2f%2fwww.vectorfree.com%2fmedia%2fvectors%2fpizza-slice-logo.jpg&ehk=S9uppQC88D3tqoz2X4YRpzAd%2bM%2fuU9E6rzSeM8ZJ7Zk%3d&risl=&pid=ImgRaw&r=0",
      time: "11:00",
      place: "New York",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, accusantium! Nulla eius fuga facilis cum, architecto facere modi debitis possimus quod, sed ullam quia libero quibusdam exercitationem tenetur magnam dolorem.",
    },
  ];
  return (
    <div>
      <h1 className="heading1">Universal Pizza Convention</h1>
      <div className="cardGrid">
        {data.map((item) => {
          return (
            <ConventionCard
              img={item.img}
              time={item.time}
              place={item.place}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
