/* 01- Understanding Hooks by creating a counter program
    - If we are clicking on add value button and calling updateValue function
      then the value will not be updated just by increasing the counter value
      as react holds on UI, that's why hooks are needed
    - We will use useState hooks for it
    - useState default is set according to need but functions are avoided generally
    - useState returns an array containing value and a function
 */
// import { useState } from "react";
// function App() {
//   // let counter = 15;
//   // const updateValue = () => { //changes done by this will not be reflected in UI
//   //   counter++;
//   // };
//   // To reflect the changes in UI we are using useState hook
//   const [counter, setCounter] = useState(15);
//   const updateValue = () => {
//     setCounter(counter + 1);
//     console.log(counter);
//   };
//   const removeValue = () => {
//     setCounter(counter - 1);
//     console.log(counter);
//   }
//   return (
//     <>
//       <h1>Learning React</h1>
//       <h2>Counter value : {counter}</h2>
//       <button onClick={updateValue}>Add Value</button>
//       <br />
//       <br />
//       <button onClick={removeValue}>Remove value</button>
//     </>
//   );
// }
/**  02 - Understanding props
      - Suppose we are creating a card on our page, it can be resuable, 
        so we will make a separate Card.jsx in components folder
      - Now for ex: if we want to change some name on every card then we 
        can use props for this
      - The values passed are received in Card.jsx and can be used there
      - We can pass according to our requirements
      - The name refered must be same
*/
import Card from "./components/Card";
function App() {
  let object = {
    username : "Mehul",
    age: 20
  }
  let arr = [10,20,30,40]
  return (
    <>
      <h1>Hello World</h1>
      {/* <Card name="Sanyam" obj={object} arr={arr}/> */}
      <Card username="Mehul" arr={arr}/>
      {/* <Card username="Sanyam"/>
      <Card arr={arr}/> */}
    </>
  );
}
export default App;
