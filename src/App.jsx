import Card from "./component/Card"

const cardDetails =[
  {
    img:"../src/assets/img1.jpeg",
    name:"Celsior",
    username: "@celsiorluxe",
    following:"500",
    followers:"112.2k",
  },
    {
    img:"../src/assets/img2.webp",
    name:"Alexi",
    username: "@alexii`",
    following:"100",
    followers:"2.4k",
  },
    {
    img:"../src/assets/img3.jpeg",
    name:"Luffy",
    username: "@LuffyTheKing",
    following:"200",
    followers:"50.2k",
  },
    {
    img:"../src/assets/img4.jpeg",
    name:"Hiyatozzzzz",
    username: "@hiyato",
    following:"300",
    followers:"25.2k",
  },
   {
    img:"../src/assets/img5.jpeg",
    name:"cabelin",
    username: "@cabelin03",
    following:"57",
    followers:"5.2k",
  },
   {
    img:"../src/assets/img6.jpeg",
    name:"Ajax..",
    username: "@Ajaxo",
    following:"30",
    followers:"12k",
  }
]
const App = () => {
  return (
    <>
    <h1 className="heading">Card - Gallery</h1>
    
    <div className="parent">
    {cardDetails.map(function(el,idx){
      // return <div key ="idx">
      return (
        <Card img = {el.img} name = {el.name} username={el.username} following ={el.following} followers ={el.followers}></Card>
      )
   

    })}
   
    </div>
    </>
  )
}

export default App
