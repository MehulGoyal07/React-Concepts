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

export default App;
