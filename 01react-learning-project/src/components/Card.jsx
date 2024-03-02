import React from "react";
// function Card(props) {

//   return (
//     <>
//     <h1 style={{color: "red"}}>Card Component : {props.username}</h1>
//     <h2>{props.arr}</h2>
//     </>
//   );
// }

// instead of props we can also destructure it in {username}
// function Card({username})
// can also set a default value
// function Card({username="Sam"})

function Card({username, arr}){
  return <>
  <h1>Name: {username}</h1>
  <h2>{arr[0]}</h2>
  </>
}

export default Card;
