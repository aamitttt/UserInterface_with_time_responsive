// const y1 = "ajfjf";
// const y2 ="rathaur";
// export default y1;

// export {y2};

// in case of default  we can access to use any value to import we can only use default for 
//only one variable can be default
// other export in { variable}; and also import in { variable}
// const y3 = "rathaiu";
// function myName()
// {
//     let name = "amit kumar";
//     return name;
// }
// export {myName,y3};

// - - - - - - - - - - - --  - - 
//calculator app


// function add(a,b)
// {
//     let sum = a+b;
//     return sum;
// }
// export default add;
// function sub(a,b)
// {
//     let sub = a-b;
//     return sub;
// }

// function mul(a,b)
// {
//     let mul = a*b;
//     return mul;
// }

// function div(a,b)
// {
//     let div = a/b;
//     div = div.toPrecision(3);
//     return div;
// }
// export  {sub,mul,div};

//- -- - - -- - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - 
// props are reffer to properties and help to costomise the properties of componenets

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Aapp(props){

//     return (
//         <>

//         <div className="cards">
//             <div className="card">

//                 <img src= {props.imgsrc} alt="myPic" className="card_img" />
//                 <div className="card_info">

//                     <span className="card_category">{props.title} </span>
//                     <h3 className="card_title"> {props.sname}</h3>
//                     <a href={props.link} target="_blank">
//                         <button><strong>watch Now</strong></button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </>


//     );
// }
// export default Aapp;




// - - - - - - - - - - - - - - - - - - - -  - - - - - 
// useState function return array of two value
// hools alway write in body of function
// setCount set new value during change of state
//increace count

// import React, { useState } from 'react';

// const Aapp = () =>{

//     const [count , setCount] = useState(0);

//     const IncNum = () =>{

//         setCount(count+1);
//     }

//     return(
//    <>
//    <div className="d">
//      <h1> {count}</h1>
//    <button onClick={IncNum}> click</button>
//    </div>

//    </>

//     );


// }
// export default Aapp;




// - -- - - - - -- - -- - - - -- -- - - -- - - -  --  -
//update time by clicking button

// import React, { useState } from 'react';

// const Aapp = () =>{

//     let newTime = new Date().toLocaleTimeString();
   
//     const [Time , setTime] = useState(newTime);

//     const Update = () =>{
//      newTime = new Date().toLocaleTimeString();
//         setTime(newTime);
//     }

//     return(
//    <>
//    <div className="d">
//      <h1> {Time}</h1>
//    <button onClick={Update}> update time</button>
//    </div>

//    </>

//     );


// }
// export default Aapp;

// clock project
 // setInterval(function_name , time in ms)  this function call argumant function after given time 

import React, { useState } from 'react';

const Aapp = () =>{

    let newTime = new Date().toLocaleTimeString();
   
    const [Time , setTime] = useState(newTime);

    const Update = () =>{
     newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        
    }

    setInterval(Update , 1000)

    return(
   <>
   <div className="d">
     <h1>Time is {Time}</h1>
     <br></br>
     <b>made by Amit Kumar (iit bhu)</b>
   
   </div>

   </>

    );


}
export default Aapp;

// after each 5 second bacground color changes progect

// import React, { useState } from 'react';

// const Aapp = () =>{

//     const purple = "#8e44ad";
   
//     const [bg , setBg] = useState(purple);

    
    
//     const Update = () =>{
//     const nc = "#34485e";
//         setBg(nc);
        
//          }

//       setInterval(Update , 3000)

//     return(
//    <>
   
//      <h1 style={{ background:bg}}> hg</h1>

   
  

//    </>

//     );


// }
// export default Aapp;



// live  input text  on destop project

// import React, { useState } from 'react';

// const Aapp = ()=>{

//     const [name , setName] = useState();

//     const InputEvent = (event)=>{

//   setName(event.target.value);

//     }

// return(
// <>
// <div>
//     <h1>hello {name }</h1>
//     <input type="text" placeholder="Enter Your Name" onChange={InputEvent}/>
//     <button>click me</button>
// </div>

// </>

//     );
// }
// export default Aapp;

//on buttn click appear input data

// import React, { useState } from 'react';

// const Aapp = ()=>{

//     const [name , setName] = useState();
   
//     const [fullName , setFullname] = useState();

//     const InputEvent = (event)=>{

//   setName(event.target.value);

//     }

// const onsubmit = ()=>
// {

//     setFullname(name)
// }
// return(
// <>
// <div>
//     <h1>hello {fullName}</h1>
//     <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name}/>
//     <button onClick={onsubmit}>click me</button>
// </div>

// </>

//     );
// }
// export default Aapp;

// three state whith two input field

// import React, { useState } from 'react';

// const Aapp = ()=>{

//     const [name , setName] = useState();
//     const [name2 , setName2] = useState();
   
//     const [fullName , setFullname] = useState();

//     const [fullName2 , setFullname2] = useState();

//     const InputEvent = (event)=>{

//   setName(event.target.value);

//     }
//     const InputEvent2 = (event2)=>{

//         setName2(event2.target.value);
      
//           }

// const onsubmit = ()=>
// {

//     setFullname(name);
//     setFullname2(name2);
// }


// return(
// <>
// <div>
//     <h1>hello {fullName} {fullName2}</h1>
//     <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name}/>
//     <input type="text" placeholder="Enter YourPassword" onChange={InputEvent2} value={name2}/>
//     <button onClick={onsubmit}>click me</button>
// </div>

// </>

//     );
// }
// export default Aapp;

// when many state present or handle many state

// import React, { useState } from 'react';

// const Aapp = ()=>{

//  const [fullName , setFullName] = useState( {fname:" " , lname: " " ,email: " " ,phone: " "});
   
//  const inputEvent = (event)=>{


// const {name , value} = event.target;

   
//  }  

//     }

// const onsubmit = ()=>
// {

//     setFullName((prevalue) => { 

//         return {
//             ...prevalue ,
//             name : value,
//         }

//     })
// }
// return(
// <>
// <div className="main_div">
//   <form onsubmit={onsubmit}>
//   <div>
//       <h1>hello {fullName.fname} {fullName.lname}</h1>
//       <p>{fullName.email}</p>
//       <p>{fullName.phone}</p>
//         <input type="text" 
//         name="fName"
//         placeholder="Enter Your first Name" 
//         onChange={inputEvent} 
//         value={fullName.fname}

//         /> <br/>

//    <input type="text" 
//         name="lName"
//         placeholder="Enter Your last Name" 
//         onChange={inputEvent} 
//         value={fullName.lname}

//         /> <br/>

//   <input type="email" 
//         name="email"
//         placeholder="Enter Your Email" 
//         onChange={inputEvent} 
//         value={fullName.email}

//         /> <br/>

//      <input type="number" 
//         name="phone"
//         placeholder="Enter Your Mobile" 
//         onChange={inputEvent} 
//         value={fullName.phone}

//         />
//        <button type="submit">submit </button>
//        </div>
//     </form>
// </div>

// </>

//     );
// }
// export default Aapp;