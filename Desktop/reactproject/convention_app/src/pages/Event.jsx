import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Card as ReactCard } from "react-bootstrap";
import EventCard from "../components/EventCard";

function Event() {
  const eventData = [
    {
      title: "Great Dough Tips",
      img: "https://th.bing.com/th/id/R.df46deb31de0dd7d389baa05f7d9fbab?rik=UsEvTHS%2bPojqnw&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fdough%2fdough-01.jpg&ehk=NOLbzyaBmitk%2fdj97X%2ftis8skLdABFOp0dVAI9r0STM%3d&risl=&pid=ImgRaw&r=0",
      time: " 12:00",
      text: " Come and learn what it takes to get the perfrect pizza dough made",
    },
    {
      title: "Home made Saucing3",
      img: "https://th.bing.com/th/id/R.df46deb31de0dd7d389baa05f7d9fbab?rik=UsEvTHS%2bPojqnw&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fdough%2fdough-01.jpg&ehk=NOLbzyaBmitk%2fdj97X%2ftis8skLdABFOp0dVAI9r0STM%3d&risl=&pid=ImgRaw&r=0",
      time: " 2:00",
      text: " Tasty sauce",
    },
    {
      title: "Taste testers",
      img: " https://th.bing.com/th/id/R.df46deb31de0dd7d389baa05f7d9fbab?rik=UsEvTHS%2bPojqnw&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fdough%2fdough-01.jpg&ehk=NOLbzyaBmitk%2fdj97X%2ftis8skLdABFOp0dVAI9r0STM%3d&risl=&pid=ImgRaw&r=0",
      time: " 3:00",
      text: "Taste of Pizza",
    },
  ];
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
      {eventData.map((item) => {
        return (
          <EventCard
            title={item.title}
            img={item.img}
            time={item.time}
            text={item.text}
          />
        );
      })}
    </div>
  );
}

export default Event;
