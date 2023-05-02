
import './App.css';
import React,{useRef, useMemo, useState} from 'react';
const arr=[
  { id:1,
    Img:"/pexels-asad-photo-maldives-1287460.jpg",
    Header:"Mal dipi",
    details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illo quis, necessitatibus sit dolores cum quia! Harum perspiciatis nobis non! Et, facere dicta veniam expedita repellendus atque consequuntur. Dicta eos inventore ipsum, assumenda maiores sapiente consequatur qui repellendus officiis voluptatibus voluptates autem necessitatibus beatae nostrum porro odit minus, optio, sed ullam dolores fugit nisi? Consectetur fuga nostrum iusto tenetur similique!"
  },
  { id:2,
    Img:"/istockphoto-467599830-612x612.jpg",
    Header:"pandi Cheri dipi",
    details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illo quis, necessitatibus sit dolores cum quia! Harum perspiciatis nobis non! Et, facere dicta veniam expedita repellendus atque consequuntur. Dicta eos inventore ipsum, assumenda maiores sapiente consequatur qui repellendus officiis voluptatibus voluptates autem necessitatibus beatae nostrum porro odit minus, optio, sed ullam dolores fugit nisi? Consectetur fuga nostrum iusto tenetur similique!"
  },
  { id:3,
    Img:"/photo-1533450718592-29d45635f0a9.jpg",
    Header:"Tiger Valley",
    details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illo quis, necessitatibus sit dolores cum quia! Harum perspiciatis nobis non! Et, facere dicta veniam expedita repellendus atque consequuntur. Dicta eos inventore ipsum, assumenda maiores sapiente consequatur qui repellendus officiis voluptatibus voluptates autem necessitatibus beatae nostrum porro odit minus, optio, sed ullam dolores fugit nisi? Consectetur fuga nostrum iusto tenetur similique!"
  },
]

function App() {

  
const [curr,setCurr]=useState(0);
const [imgC,setImgC] =useState(arr[curr]?.Img);
const [content,setContent]=useState(arr[curr]?.details);
const [headerC,setHeaderC]=useState(arr[curr]?.Header);
const [trys,setTrys]=useState(false);
useMemo(()=>{
  if(curr == arr.length){
    setCurr(0);
  }
  if(curr == -1){
    setCurr(arr.length-1);
  }
  if(curr >=0 && curr <arr.length ){
      setTimeout(()=>{
      setCurr(curr+1);
    },5000)
  }   
  setImgC(arr[curr]?.Img);
  setContent(arr[curr]?.details);
  setHeaderC(arr[curr]?.Header);
  
},[curr]);

console.log(curr)
const handleNext=()=>{
  setCurr(curr+1);

};
const handlePrev=()=>{

setCurr(curr-1);
};

  return (
    <div className="App">
  <div className='details-container'>
<img src={imgC} className='img-container'  alt="jkj"/>

<div  className='details-content'>
  <h1>{headerC}</h1>
  <p> {content}
</p>
</div>
     </div> 
     <div  className='couserl-button'>
      <button onClick={handlePrev}>previous</button>
      or
      <button    onClick={handleNext}>next</button>
     </div>
    </div>
  );
}

export default App;
