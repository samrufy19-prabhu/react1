import React from 'react';
function App() { 
  const name = "John Doe"; 
  return ( 
    <div> 
      <h1>Hello, {name}!</h1>  {/* JSX with dynamic value */} 
      <p>Today is {new Date().toLocaleDateString()}</p> 
    </div> 
  ); 
}
export default App;