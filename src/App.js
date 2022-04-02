
// import './App.css';
// const Person = (props) =>{
//  return(
//    <>
//     <h1>Name: {props.name}</h1>
//      <h2>LastName: {props.lastname}</h2>
//     <h3>Age: {props.age}</h3>
//    </>
//    )
// }
// const App = () =>{
 
//   return (
//     <div className="App">
//       <Person name ={'John'} lastname = {'Doe'} age = {'50'} />
//       <Person name ={'Jane'} lastname = {'Doe'} age = {'33'} />
//     </div>
//   );
// }

// export default App;


// use of state


import './App.css';
import {useState, useEffect}from 'react';

const App = () =>{
 const [counter, setCounter]= useState(0)
 useEffect(()=>{
 alert("You changed counter to "+ counter);
  }, [counter])
  return (
    <div className="App">
      <button onClick ={() => setCounter((prevCount) => prevCount -1) } >-</button>
      <h1>{counter}</h1>
      <button onClick ={() => setCounter((prevCount) => prevCount +1) } >+</button>
     
    
    </div>
  );
}

export default App;
