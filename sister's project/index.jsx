// import React from 'react'
// import NavBar from './NavBar'
// import "./App.css"



// export const App = () => {
//   var h2Style={
//     color:"red",
//     backgroundColor:"green"
//   }
  
//   return (
//     <div>
//       <h1 style={{backgroundColor:"yellow",color:"red"}}>hello</h1>
//       <h2 style={h2Style}>world</h2>
//       <h1 className="me" >wow</h1>
//       <NavBar/>
//     </div>
//   )
// }
// export default App
// import React from 'react'
// import "./APP.css"
// import NavBar from "./NavBar"

// const App = () => {
//   var k={
//     color:"blue",
//     backgroundColor:"aqua"
//   }
//   return (
//     <div>App
//       <h1 style={{backgroundColor:"red",color:"green", textAlign:"center"}}>wow</h1>
//       <h2 style={k}>GAYATHRI</h2>

//       <h1 className='me'>DEVI</h1>
//       <NavBar/>
//     </div>
//   )
// }

// export default App


// // use useSate hook 
// import React, { useState } from 'react'

// export const App = () => {
//   var [a,b]=useState(9)

//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={()=>{
//         b(a+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         b(a-1)
//       }}>Drecrement</button>

//       <button onClick={()=>{
//         b(0)
//       }}>Reset</button>
//     </div>
//   )
// }
// export default App


// // useState different example

// import React, { useState } from 'react';
// function  App(){

//   var [a,b]=useState(0)
//   function increment(){
//     b(a+1)
//   }
  
//   function Drecrement(){
//     b(a-1)
//   }
//   function Reset(){
//     b(0)
//   }
  
//   return(
//     <div> 
//       <h1>{a}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={Drecrement}>Drecrement</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }
// export default App


////use useEffect

// import React, { useEffect, useState } from 'react';
// function App(){
//   var [count,setCount]=useState(0)
//   var [value,setValue]=useState(0)
//   useEffect(()=>{
//     setCount(count+1)
//   },[value])
//   return(
//     <div>
//       <h1>i am the count{count}</h1>
//       <h1>i am the value{value}</h1>
//       <button onClick={()=>{
//         setValue(value+1)
//       }}>Increment</button>
//     </div>
//   )
// }
// export default App



// import React, { memo, useEffect, useState } from 'react'
// import "./App.css"
// function App(){
//   var [a,b]=useState(0)
//   var [c,d]=useState(0)

//   useEffect(()=>{
//     b(a+1)
    
//   },[c])
//   function Reset(){
//     b(1)
//     d(0)
//   }

//   return(
//     <div id="me">
//       <h1>i am the count{a}</h1>
//       <h1>i am the Value{c}</h1>
//       <button style={{color:"red",backgroundColor:"black"}} onClick={()=>{
//         d(c+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         b(a-1)
//       }}>Decrement</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }
// export default App


// import React, { useEffect, useState } from 'react';
// function App(){
//   var [a,b]=useState(0)
//   var [c,d]=useState(0)
//   useEffect(()=>{
//     b(a+1)
    

//   },[c])
//   // useEffect(()=>{
//   //   b(a-1)
//   // },[c])
//   return(
//     <div>
//       <h1>value of a  = {a}</h1>
//       <h1>value of c  = {c}</h1>
//       <button onClick={()=>{
//         d(c+1)
//       }}>Increment</button>
//       {/* <button onClick={()=>{
//         d(c-1)
//       }}>Drecrement</button> */}

//     </div>
//   )
// }
// export default App


// //// convert json data into object and provide the items from fakeStore api

// import React from 'react';
// function App(){
//   const products = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     rating: {
//       rate: 3.9,
//       count: 120
//     }
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     description: "Slim-fitting style, contrast raglan long sleeve...",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//     rating: {
//       rate: 4.1,
//       count: 259
//     }
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description: "great outerwear jackets for Spring/Autumn/Winter...",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
//     rating: {
//       rate: 4.7,
//       count: 500
//     }
//   }

//   // Remaining objects continue here...
// ];

//   return(
//     <div>{products.map((item)=>{
//       console.log(item)
//       return(
//        <div style={{color:"aqua",backgroundColor:"black"}}>
//         <h1>{item.id}</h1>
//         <h2>{item.title}</h2>
//         <h3>{item.price}</h3>
//         <p>{item.description}</p>
//         <p>{item.category}</p>
//         <img style={{width:"100px",height:"100px"}} src={item.image} alt="" />
//         <p>{item.rating.rate}</p>
//         <h4>{item.rating.count}</h4>
//        </div>        
        
//       )
//     })
      
//     }</div>
//   )

// }
// export default App





// import React from 'react';
// import Home from './Home';
// import Login from './Login';
// function App(){
//   var a=false
//   var component
//   if(a==true){
    
//      component= <Home/>
    
//   }
//   else{
    
//      component= <Login/>
    
//   }
//   return (
// //     <div>{component}</div>
// //   )
// // }
// // export default App
// import React from 'react'
// import DigitialClock from './DigitialClock'
// import CounterApp from './CounterApp'
// import CharacterCounter from './CharacterCounter'
// import BackgroundColor from './BackgroundColor'
// import UserSearchFilter from './UserSearchFilter'
// import RandomQuoteGenerator from './RandomQuoteGenerator'
// import TodoList from './TodoList'
// import ThemeToggle from './themeToggle'
// import ProductSearch from './ProductSearch'

// const App = () => {
//   return (
//     <div>
//       <h1>
//         <DigitialClock/>
//       </h1>
//       <h1>
//         <CounterApp/> 
//       </h1>
//       <h2><CharacterCounter/></h2>
//       <h2><BackgroundColor/></h2>
//       <h2><UserSearchFilter/></h2>
//       <h2><RandomQuoteGenerator/></h2>
//       <h2 style={{backgroundColor:"purple"}}><TodoList/></h2>
//       <h2><ThemeToggle/></h2>
//       <h2><ProductSearch/></h2>
      
//     </div>
//   )
// }

// export default App


// import React from 'react'

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Sql from './Sql'
// import Home from './Home'


// const App = () => {
//   return (
//     <div>
      
//       <div>
//         <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/sql' element={<Sql/>} />
//           </Routes>
//           </BrowserRouter>
//       </div>
//     </div>
//   )
// }

// export default App






// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import Sql from './Sql'
// import Python from './Python'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>

//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/sql' element={<Sql/>}/>
//         <Route path='python' element={<Python/>}/>


//       </Routes>
      
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
      
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/home' element={<Home/>}/>


//       </Routes>
      
      
//       </BrowserRouter>
//     </div>
//   )
// }

// // export default App



// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Home from './Home';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//          {/* <Route path='/' element={<Home/>}/>
//          <Route path='/sql' element={<Sql/>}/>
//         <Route path='python' element={<Python/>}/> */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React from 'react'
// import Header from './Header'

// const App = () => {
//   var userData={
//     name:"gayathri",
//     email:"gayathri@gmail.com",
//     age:22
//   }
//   return (
//     <div>
//       <h1><Header data={userData}/></h1>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
      
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/home' element={<Home/>}/>


//       </Routes>
      
      
//       </BrowserRouter>
//     </div>
//   )
// }

// // export default App



// import React from 'react'
// import Home from './Home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Sql from './Sql'
// import Java from './Java'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/'  element={<Home/>}/>
//         <Route path='/sql'  element={<Sql/>}/>
//         <Route path='/java'  element={<Java/>}/>
       




//       </Routes>
      
      
      
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App






// import React, { useEffect, useState } from 'react'

// const App = () => {
//     var [data,setData] = useState([])
//     var [cart,setCart] = useState([])
//     console.log("iam the cart",cart)
//     console.log(data)
//     async function fetchData(){
//         var result = await fetch("https://dummyjson.com/products")
//         var response = await result.json()
//         setData(response.products)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])

//     function addToCart(product){

//         setCart([...cart,product])

//     }
//   return (
//     <div>
//         {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.title}</h1>
//                         <h2>{item.price}</h2>
//                         <p>{item.description}</p>
//                         <img style={{height : "200px",width : "200px"}} src={item.images} alt="" />
//                         <button onClick={()=>addToCart(item)}>Add To Cart</button>
//                     </div>
//                 )
//             })
//         }
//         <h1>Iam the cart Items {cart.length}</h1>
//         {
//             cart.map((item)=>{
//                 return(
//                     <div>
//                           <h1>{item.title}</h1>
//                         <h2>{item.price}</h2>
//                         <p>{item.description}</p>
//                         <img style={{height : "200px",width : "200px"}} src={item.images} alt="" />

//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default App











// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./CounterSlice";

// const App = () => {
//   const count = useSelector((state) => state.counter.count);

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => dispatch(increment())}>
//         +10
//       </button>

//       <button onClick={() => dispatch(decrement())}>
//         -10
//       </button>

//       <button onClick={() => dispatch(reset())}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;





// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, reset } from './CounterSlice';

// const App = () => {
//     const count=useSelector((state)=>state.counter.count)
//     const dispatch=useDispatch();

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>dispatch(increment())}>+10</button>
//         <button onClick={()=>dispatch(decrement)}>-10</button>
//         <button onClick={()=>dispatch(reset)}>0</button>
//     </div>
//   )
// }

// export default App



// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./CounterSlice";
// import CounterApp from './CounterApp';

// const App = () => {
//   const count = useSelector((state) => state.counter.count);

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => dispatch(increment())}>
//         +1
//       </button>

//       <button onClick={() => dispatch(decrement())}>
//         -1
//       </button>

//       <button onClick={() => dispatch(reset())}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;
// import React from 'react'
// import CounterApp from './CounterApp'

// const App = () => {
//   return (
//     <div>
//       <h1><CounterApp/></h1>
//     </div>
//   )
// }


// export default App




// import React from 'react'
// import Home from './Home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Sql from './Sql'
// import Java from './Java'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/'  element={<Home/>}/>
//         <Route path='/sql'  element={<Sql/>}/>
//         <Route path='/java'  element={<Java/>}/>
       




//       </Routes>
      
      
      
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import CharacterCounter from './CharacterCounter'


const App = () => {
  return (
    <div>
      <h1><CharacterCounter/></h1>

      </div>
  )
}

export default App
