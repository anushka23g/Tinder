import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

export default function App() {
  return (
    <div className="App">
  
      <Header />

       <TinderCards />
       <SwipeButtons />
   
    </div>
  );
}
