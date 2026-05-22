import Card from "./component/Card";

import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";

const cardDetails = [
  {
    img: img1,
    name: "Celsior",
    username: "@celsiorluxe",
    following: "500",
    followers: "112.2k",
  },
  {
    img: img2,
    name: "Alexi",
    username: "@alexii",
    following: "100",
    followers: "2.4k",
  },
  {
    img: img3,
    name: "Luffy",
    username: "@LuffyTheKing",
    following: "200",
    followers: "50.2k",
  },
  {
    img: img4,
    name: "Hiyatozzzzz",
    username: "@hiyato",
    following: "300",
    followers: "25.2k",
  },
  {
    img: img5,
    name: "cabelin",
    username: "@cabelin03",
    following: "57",
    followers: "5.2k",
  },
  {
    img: img6,
    name: "Ajax..",
    username: "@Ajaxo",
    following: "30",
    followers: "12k",
  },
];

const App = () => {
  return (
    <>
      <h1 className="heading">Card - Gallery</h1>

      <div className="parent">
        {cardDetails.map((el, idx) => (
          <div key={idx}>
            <Card
              img={el.img}
              name={el.name}
              username={el.username}
              following={el.following}
              followers={el.followers}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;