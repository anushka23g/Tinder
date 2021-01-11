import { SwipeableDrawer } from "@material-ui/core";
import React,{useEffect, useState} from "react";
import "./TinderCards.css";
//import "./axios.js";
//import axios from "axios";

export default function TinderCards(){

const [people,setPeople]=useState([
{
  "name": "elon",
  
"imgurl": "https://www.google.com/search?q=elon+musk&sxsrf=ALeKk01OyGNDkQ31pmRAvDCm_PYjhFIswA:1610316341132&tbm=isch&source=iu&ictx=1&fir=zY4uP_4PDKQQGM%252CcElLiMk8T9O8LM%252C_&vet=1&usg=AI4_-kS6vCeOJfyJmcyMNq4v66qqCJFALg&sa=X&ved=2ahUKEwiLsfTrr5LuAhUjjOYKHQ84DTkQ_h16BAg4EAE#imgrc=zY4uP_4PDKQQGM",
"url": "https://www.google.com/search?q=elon+musk&sxsrf=ALeKk01OyGNDkQ31pmRAvDCm_PYjhFIswA:1610316341132&tbm=isch&source=iu&ictx=1&fir=zY4uP_4PDKQQGM%252CcElLiMk8T9O8LM%252C_&vet=1&usg=AI4_-kS6vCeOJfyJmcyMNq4v66qqCJFALg&sa=X&ved=2ahUKEwiLsfTrr5LuAhUjjOYKHQ84DTkQ_h16BAg4EAE#imgrc=zY4uP_4PDKQQGM"

},
{

  "name": "Mark Zuckerberg",
  
"imgurl": "https://www.google.com/search?q=Mark+Zuckerberg&sa=X&stick=H4sIAAAAAAAAAONgFuLUz9U3MM6rSjNUAjMtzFLyKrX4AlKLivPzgjNTUssTK4sXsfL7JhZlK0SVJmenFiWlFqXvYGUEAFic_I89AAAA&biw=1366&bih=657&sxsrf=ALeKk00GhNL60K_8L55NzeKJUB9AnYl9Jw:1610316365247&tbm=isch&source=iu&ictx=1&fir=bosZ9u-pjroXbM%252CE-g4OuFexpUNGM%252C%252Fm%252F086dny&vet=1&usg=AI4_-kTncjTMgZS8K6Oz3EgPT7_Zoe3T9A&ved=2ahUKEwimn7T3r5LuAhWyIbcAHShpBhUQ_B16BAg1EAE#imgrc=bosZ9u-pjroXbM",

"url": "https://www.google.com/search?q=Mark+Zuckerberg&sa=X&stick=H4sIAAAAAAAAAONgFuLUz9U3MM6rSjNUAjMtzFLyKrX4AlKLivPzgjNTUssTK4sXsfL7JhZlK0SVJmenFiWlFqXvYGUEAFic_I89AAAA&biw=1366&bih=657&sxsrf=ALeKk00GhNL60K_8L55NzeKJUB9AnYl9Jw:1610316365247&tbm=isch&source=iu&ictx=1&fir=bosZ9u-pjroXbM%252CE-g4OuFexpUNGM%252C%252Fm%252F086dny&vet=1&usg=AI4_-kTncjTMgZS8K6Oz3EgPT7_Zoe3T9A&ved=2ahUKEwimn7T3r5LuAhWyIbcAHShpBhUQ_B16BAg1EAE#imgrc=bosZ9u-pjroXbM"
}

]);
/*

useEffect(()=>{
async function fetchData(){
  const req= await axios.get("tinder/cards");

  setPeople(req.data);
}
},[])
*/

const swiped=(dir,nameToDel)=>{
console.log("removing"+{nameToDel});
setLastDirection(direction);
}

const outOfFrame=(name)=>{

  console.log({name}+"left the screen");
}



  return(
     <div className="tinderCards">
     <div className="tinderCards__cardContainer">
  
  {  people.map((person) => {
  return (
  <div
  className="swipe"
  key={person.name}
  preventSwipe={["up","down"]}
  onSwipe={(dir)=>{swiped(dir,person.name)}}

  onCardLeftScreen={ ()=> {
    return outOfFrame(person.name);
  }}
  >

<div className="card" style={
  {
    backgroundImage: "url(${person.imgurl})"
  }}
    >
    <img src="url(${person.url})" />
<h3>{person.name}</h3>
</div>

    </div>
    );
})}
  </div>
  </div>
  )

}