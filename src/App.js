import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  const nayoks = ['Razzak','Alamgir','Salman','Shovo','bappi']
  const products = [
    {name:'Psotoshop', prize:'$99.99'},
    {name:'Illustator', prize:'$60.99'},
    {name:'PDF reader', prize:'$30.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product => (
              <Prod product={product}></Prod>
            ))
          }
        </ul>
        <p>
        <Person name='Rubel' Nayeka='Mousumi' ></Person>
        <Person name="Manna" Nayeka="Sobnom"  ></Person>
        <Person name="Riaz" Nayeka="Purnima" ></Person> 
        {/* <Products></Products>   */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px' 
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.Nayeka}</h3>
    </div>
  )
}
function Users(){
  const [user , setUser] =useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUser(data));
  } ,[])
return(
  <div>
     <ul>
        {user.map(user => <li>{user.name}</li>)}
     </ul>
  </div>
)
}
function Count(){
    const [count , setCount] = useState(11)
    const handleCount = ()=> {
       const newCount = count + 1 ;
       setCount(newCount);
    }
    return(
      <div>
         <h1>Count:{count}</h1>
         <button onClick={()=>setCount(count - 1)}>Decrease</button>
         <button onClick={handleCount}>Increase</button>
      </div>
    )
}

function Prod({product, children}){

     const productStyle={
       border:'1 px solid gray',
       borderRedius:' 5 px',
       backgroundColor:'lightgray',
       height: '200px',
       width:'200px',
       float:'left',
       margin:'10px',
       padding:'5px'

     } 
 
  return(
    <div style={productStyle}>
      <h2>{product.name}</h2>
      <h1>{product.prize}</h1>
      <h1>{children}</h1>
      <button>Buy Now</button>

    </div>
  )
}

export default App;
