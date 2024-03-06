import React, { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-3 
      shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "red"}}>Red</button>
        <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "blue"}}>Blue</button>
        <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "green"}}>Green</button>
        <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "pink"}}>Pink</button>
        <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "violet"}}>Violet</button>
        <button className="outline-none px-5 py-1 rounded-full text-yellow-300 shadow-lg" 
        style={{backgroundColor: "yellow"}}>Yellow</button>
        
      </div>
      </div>
    </div>
    </>
  );
}
// import ButtonComp from "./components/ButtonComp";
// function App(){
//   return (
//     <>
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: "olive"}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12
//       inset-x-0 px-2"> 
//       <div className="flex flex-wrap justify-center gap-3 
//       shadow-lg bg-white px-3 py-2 rounded-3xl">
//         <ButtonComp color="red"/>
//         <ButtonComp color="yellow"/>
//         <ButtonComp color="green"/>
//         <ButtonComp color="blue"/>
//         <ButtonComp color="violet"/>
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }

export default App;
