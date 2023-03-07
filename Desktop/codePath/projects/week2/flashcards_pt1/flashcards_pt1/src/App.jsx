import "./App.css";
import { useState } from "react";
import FlashCard from "./FlashCard";
import FlashCardList from "./FlashCardList";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const trivia = [
    {
      back: "(1845-1849) The Mexican War starts in 1846. The Treaty of Guadalupe-Hidalgo ends the war in 1848. Wanted to settle Oregon boundary dispute with Great Britain. Wanted to aquire California and to incorperate Texas into union, while reducing the tarriff and re-establish an independent treasury system.",
      front: { img: "../public/john.jpg", title: "James K. Polk" },
    },
    {
      back: "(1857-1861) The Confederate States of America are formed in 1861. He tried to maintain a balance between proslavery and antislavery factions, but his moderate views angered radicals in both North and South, and he was unable to forestall the secession of South Carolina on December 20, 1860. Lecompton Constitution supporter.",
      front: { img: "../public/bunchanan.jpg", title: "James Buchanan" },
    },
    {
      back: "Democrat (1853-1857), Candidate from the North who could please the South. His success in securing the Gadsden Purchase was overshadowed by the controversy surrounding the Ostend Manifesto, the Kansas Nebraska Act and 'Bleeding Kansas.' Passions over slavery had been further inflamed, and the North and South were more irreconcilable than before. He succeeded only in splitting the country further apart.",
      front: { img: "../public/pierce.jpg", title: "Franklin Pierce" },
    },
    {
      back: "(1841), was an American military leader, politician, the ninth President of the United States, and the first President to die in office. His death created a brief Constitutional crisis, but ultimately resolved many questions about presidential succession left unanswered by the Constitution until passage of the 25th Amendment. Led US forces in the Battle of Tippecanoe.",
      front: { img: "../public/Hayes.jpg", title: "Rutherford B. Hayes" },
    },
    {
      back: "The fourth President of the United States (1809-1817). A member of the Continental Congress (1780-1783) and the Constitutional Convention (1787), he strongly supported ratification of the Constitution and was a contributor to The Federalist Papers (1787-1788), which argued the effectiveness of the proposed constitution. Favored strict interpretation of the Constitution.",
      front: { img: "../public/madison.jpg", title: "James Madison" },
    },
    {
      back: "(1989-1993), Berlin wall comes down, Persian Gulf war against aggressive Saddam Hussein who invaded Kuwait.",
      front: { img: "../public/bush.jpg", title: "George Bush" },
    },
    {
      back: "(1977-1981), Created the Department of Energy and the Depatment of Education. He was criticized for his return of the Panama Canal Zone, and because of the Soviet war in Afghanistan, he enacted an embargo on grain shipments to USSR and boycotted the 1980 Olympics in Moscow and his last year in office was marked by the takeover of the American embassy in Iran, fuel shortages, and the Soviet Invasion of Afghanistan, which caused him to lose to Ronald Regan in the next election.",
      front: { img: "../public/tyler.jpg", title: "John Tyler" },
    },
    {
      back: "(1945-1949) and (1949-1953), Succeeded Franklin D. Roosevelt upon his death. Led the country through the last few months of World War II, and made the controversial decision to use two atomic bombs against Japan in August 1945. After the war, Truman was crucial in the implementation of the Marshall Plan, which greatly accelerated Western Europe's economic recovery. Created the CIA",
      front: { img: "../public/truman.jpg", title: "Harry S. Truman" },
    },
    {
      back: "(1837-1841) Advocated lower tariffs and free trade, and by doing so maintained support of the south for the Democratic party. He succeeded in setting up a system of bonds for the national debt.",
      front: { img: "../public/john.jpg", title: "John Adans" },
    },
    {
      back: "Democrat (1885-1889) and (1893-1897) His presidency represented no sharp break with the conservative policies of his predecessors except in opposing governmental favors to business but was noteworthy for railroad regulation and tariff reform. He had a strictly limited view of the government's role in both economic and social matters- limited government. Dawes Act and Pullman Strike.",
      front: { img: "../public/grover.jpg", title: "Grover Cleveland" },
    },
  ];

  const [rand, setRand] = useState(0);
  const [cards, setCard] = useState({
    front: "Start!",
    back: "Press the button to start the flashcards",
  });
  const [flip, setFlip] = useState(false);

  function randomNumberInRange(item) {
    return Math.floor(Math.random() * item.length - 1);
  }
  const randomNumberIndex = (e) => {
    setRand(Math.floor(Math.random() * trivia.length));
  };
  return (
    <div className="App">
      <h1>Do You Know Your Presidents?</h1>
      <h2>Test your Knowledge of the US Presidnets</h2>
      <h4>Number of cards 10</h4>

      <Card className="text-center" style={{ width: "600px" }}>
        <Card.Body>
          <Card.Text onClick={() => setFlip(!flip)}>
            {flip ? (
              trivia[rand].back
            ) : (
              <>
                <h3 className="title">{trivia[rand].front.title}</h3>
                <img
                  style={{ width: "100px", height: "110px" }}
                  src={trivia[rand].front.img}
                ></img>
              </>
            )}
          </Card.Text>

          <div className="bttn">
            <button
              className="btn btn-l"
              type="button"
              onClick={randomNumberIndex}
            >
              <a>
                <img style={{ height: "30px" }} src="../public/larrow.png" />
              </a>
            </button>
            <button className="btn" type="button" onClick={randomNumberIndex}>
              <a>
                <img style={{ height: "30px" }} src="../public/rarrow.png" />
              </a>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
