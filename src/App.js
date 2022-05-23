import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
/*
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136) */
const App=function(){

  const cardElements= data.map(function(cardObject){
      return <Card 
      key = {cardObject.key}
      img = {cardObject.coverImg}
      rating = {cardObject.stats.rating}
      reviewCount = {cardObject.stats.reviewCount}
      country = {cardObject.location}
      title = {cardObject.title}
      price = {cardObject.price}
      openSpots ={cardObject.openSpots}
      />
     
  })
  return (
    <div className="app">
      < Navbar/>
      < Hero />
      <section className="cardSection">
      {cardElements}
      </section>
    </div>
    
  )
}

export default App