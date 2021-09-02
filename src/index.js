// react module
// import React from 'react'; // to use jsx expression in react

// import ReactDOM from 'react-dom'; //to target place in index.html for jsx in react
// babel modern js compailer


// to show data without react but use pure js

// var h1 = document.createElement("h1");
// h1.innerHTML="hello world";
// document.getElementById("root").appendChild(h1);

// to show data with react using jsx ReactDOM.render(kya dikhana h(jsx expression),kaha dikhana h,call back);

// ReactDOM.render(<h1>hii</h1>,document.getElementById('root'),


// );

// for muliple jsx wrap all in a React.Fragment or <>  </> or pull all jsx in [ ] just like index
// ReactDOM.render( <React.Fragment>
//                  <h1>hii</h1>
//                  <p>amit</p>
//                  </React.Fragment>
//                  ,document.getElementById('root')


// );
// ReactDOM.render( <>
//                  <h1>hii</h1>
//                  <p>amit</p>
//                  </>
//                  ,document.getElementById('root')


// );
// ReactDOM.render( 
//   [<h1>hii</h1>,<p>amit</p>]
//   ,document.getElementById('root')


// );


// to use html(jsx) in javascript use react module 
// to use javascript in jsx use {} 

// const name = "Amit kumar";
// ReactDOM.render(
//   <>
// <h1>hii {name}</h1>
// <p>how are you {name} your lucy number is {76+99-44} and {Math.random()}</p>
// </>
// ,document.getElementById('root')


// );


//  concatination with space

//  const name = "Amit kumar";
//  const clas = "b.tech";
// ReactDOM.render(
//   <>
// <h1>hii {name +" "+ clas}</h1>

// </>
// ,document.getElementById('root')
// );


// template literal use backslas { `${ }  ${ }` }

// const name = "Amit kumar";
// const clas = "b.tech";
// ReactDOM.render(
//  <>
// <h1>hii {`${name} ${clas}`}</h1>

// </>
// ,document.getElementById('root')
// );
// more advance
// const name = "Amit kumar";
// const clas = "b.tech";
// const dt = new Date();
// ReactDOM.render(
//  <>
// <h1> { `hii ${name} ${clas} how are you  today date is ${dt}`}</h1>

// </>
// ,document.getElementById('root')
// );

// jsx atributes

// const name = "Amit kumar";
// const clas = "b.tech";
// const dt = new Date();
// ReactDOM.render(
//  <>

// <h1 contentEditable="true"> { `hii ${name} ${clas}`}</h1>
// <p> how are you
// <img src="https://picsum.photos/200/300" />

//  </p>
// <h5>{`today date is ${dt}`}</h5>

// </>
// ,document.getElementById('root')
// );


// use css
// use className in place of class
// import "./index.css";
// const name = "Amit kumar";
// const clas = "b.tech";

// const im1 = "https://picsum.photos/200/300";
// ReactDOM.render(
//  <>

// <h1 contentEditable="true"> { `hii ${name} ${clas}`}</h1>
// <p className="heading"> how are you
// <img src={im1} />

//  </p>

// </>
// ,document.getElementById('root')
// );

// inline or internal css

// import "./index.css";
// const name = "Amit kumar";
// const clas = "b.tech";

// const im1 = "https://picsum.photos/200/300";
// ReactDOM.render(
//  <>

// <h1> { `hii ${name} ${clas}`}</h1>
// <p style={{color :'#fa9191', textAlign: 'center'}}> how are you
// <img src={im1} />

//  </p>

// </>
// ,document.getElementById('root')
// );

// import "./index.css";
// const name = "Amit kumar";
// const clas = "b.tech";
// const heading = {color :'#fa9191', textAlign: 'center'}

// const im1 = "https://picsum.photos/200/300";
// ReactDOM.render(
//  <>

// <h1> { `hii ${name} ${clas}`}</h1>
// <p style={heading}> how are you?
//  </p>

// </>
// ,document.getElementById('root')
// );

//- - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/// Greeting interface app acoording to time

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = " ";
// const c = { };
// if(curDate>=1 && curDate <12)
// {
//    greeting = "Good Morning";
//    c.color="green";
// }else if(curDate>=12 && curDate <19)
//     {
//         greeting = "Good Afternoon";
//         c.color="orange";
//     }else{

//         greeting = "Good Night";
//         c.color="black";
//     }

//     const a={color:"yellow"}

// ReactDOM.render(
// <>
// <div>
// <h1><span style={a}>Hello sir,</span> <span style={c}>{greeting} </span></h1>
// </div>
// </>
// ,
// document.getElementById("root")

// );

//-- - -- - - - - -- - - - -- - - - - - - - -- - - - - -  -- - - -- - - - - - 

//components
// if no inerr text presend in tag then <tag> </tag>  can be written as <tag/>
// first element of component page should capital and end with .jsx
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Heading from "./Heading";
// import Para from "./Para";
// import Olist from "./Olist";
// ReactDOM.render(
//   <>
// <Heading></Heading>  
// <Para></Para>
// <Olist/>

//   </> , 
// document.getElementById('root')
// );


// for get rid from many component on index page make another .jsx file 


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Ap from "./Ap";

// ReactDOM.render(<Ap/>,document.getElementById('root'));

// we get a object of js during import from other page so use {} to display
// in case of function we have to { functionname()} to display

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ak ,{myName,y3,y2} from './Aapp';

// ReactDOM.render(
//     <>
// <ol>
//     <li>
//         amit
//     </li>
//     <li>
//         {ak} 
//     </li>
//     <li>
//         {y2}
//     </li>
//     <li>{myName()}</li>
// </ol>

//     </>,document.getElementById('root')

//     );
// - - - - - - -  - - - - 
//calculator app
// import React from 'react';
// import ReactDOM from 'react-dom';
// import add from './Aapp';
// import Aapp,{sub,mul,div} from './Aapp';


// ReactDOM.render(
// <>
// <ul>

// <li>{`sum is ${add(3,4)}`}</li>
// <li>{`sub is ${sub(3,4)}`}</li>
// <li>{`mul is ${mul(3,4)}`}</li>
// <li>{`div is ${div(3,4)}`}</li>


// </ul>

// </>

// ,document.getElementById("root")
// );

// array
// var ar = [11,3,33,44];
// alert(ar[0]);

//map method in array
// map() method calls the provided function once for each element in array

// syntax      array.map(function(currentvalue , index ,arr){ } , thisvalue);

// const oldarr =["amit","kumar","rathaur"];

// const newarr = oldarr.map(function(cval){ return cval;} );
// document.write(newarr);
// const newar1 = oldarr.map(function(cval){ return cval+ "raja";} );
// document.write(newar1);

// const newar2 = oldarr.map(function(cval,i){ return i + "-" + cval ;} );
// document.write(newar2);

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - -

//netflix clone

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';

// <div className="cards">
// <div className="card">

//     <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png" alt="myPic" className="card_img" />
//     <div className="card_info">

//         <span className="card_category">A Netflix Original Series </span>
//         <h3 className="card_title"> DARK</h3>
//         <a href="https://www.netflix.com/in/" target="_blank">
//             <button>watch Now</button>
//         </a>
//     </div>
// </div>
// </div>

// props are reffer to properties and help to costomise the properties of componenets
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';
// import "./index.css";
// ReactDOM.render( 
//     <>
//     <h1 className="heading_style">List Of top 5 Webseries on Netfilixe</h1>
//     <Aapp
//    imgsrc = "https://picsum.photos/200"
//    title = "A Black Netfilixe Web"
//    sname = "Black "
//    link = "https://www.netflix.com/in/ "
       
//     />

//     <Aapp
//    imgsrc = "https://picsum.photos/200/200"
//    title = "A Horrible Netflixe Web"
//    sname = "Horrible "
//    link = "https://www.netflix.com/in/ "
       
//     />

//     <Aapp
//    imgsrc = "https://picsum.photos/200"
//    title = "A Romantic Netflixe Web"
//    sname = "Romantic"
//    link = "https://www.netflix.com/in/ "
       
//     />

// <Aapp
//    imgsrc = "https://picsum.photos/200/200"
//    title = "A Horrible Netflixe Web"
//    sname = "Horrible "
//    link = "https://www.netflix.com/in/ "
       
//     />

// <Aapp
//    imgsrc = "https://picsum.photos/200"
//    title = "A Romantic Netflixe Web"
//    sname = "Romantic"
//    link = "https://www.netflix.com/in/ "
       
//     />

//     </>
//     , document.getElementById("root")
// );



// use arraimport React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';
// import "./index.css";
// import Sdata from './Sdata';
// ReactDOM.render( 
//     <>
//     <h1 className="heading_style">List Of top 5 Webseries on Netfilixe</h1>
//     <Aapp
//    imgsrc ={Sdata[0].imgsrc}
//    title = {Sdata[0].title}
//    sname = {Sdata[0].sname} 
//    link = {Sdata[0].link}
//  />
 
//  <Aapp
//    imgsrc ={Sdata[1].imgsrc}
//    title = {Sdata[1].title}
//    sname = {Sdata[1].sname} 
//    link = {Sdata[1].link}
       
//     />
//  <Aapp
//    imgsrc ={Sdata[2].imgsrc}
//    title = {Sdata[2].title}
//    sname = {Sdata[2].sname} 
//    link = {Sdata[2].link}
       
//     />
//  <Aapp
//    imgsrc ={Sdata[3].imgsrc}
//    title = {Sdata[3].title}
//    sname = {Sdata[3].sname} 
//    link = {Sdata[3].link}
       
//     />
//      <Aapp
//    imgsrc ={Sdata[4].imgsrc}
//    title = {Sdata[4].title}
//    sname = {Sdata[4].sname} 
//    link = {Sdata[4].link}
       
//     />


//     </>
//     , document.getElementById("root")
// );


//---- - -    -   -   - -- - - - - - - --------------------

// array destructing and hooks
// to devide array in small part


// const arr = ['amit','raja','rahul'];

// let [t1,t2,t3] = arr;

// document.write("my name is" + t1);
// document.write("my friend is" + t3);


// hooks bsically it is useState() use to change state or // useState function return array of two value
//  syntax   const [current value , function of updated value] = useState(inetial value);
// increace count project
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';
// import "./index.css";


// ReactDOM.render(
//     <>

// <Aapp/>
//     </>
// ,document.getElementById("root")
// );

//update time by clicking button project


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';
// import "./index.css";


// ReactDOM.render(
//     <>

// <Aapp/>
//     </>
// ,document.getElementById("root")
// );

//clock project


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Aapp from './Aapp';
// import "./index.css";


// ReactDOM.render(
//     <>

// <Aapp/>

//     </>
// ,document.getElementById("root")
// );


// input react 

// import React from 'react';
// import ReactDOM from "react-dom";
// import Aapp from './Aapp';
// import './index.css';

// ReactDOM.render(
//     <>
// <Aapp/>

//     </>

//     , document.getElementById("root")


// );
    
// spread operator  ...array_name
//  spread operator use to concanate whole array in another array

// const a1 = [ "amit" , "raja" , "pavan"];

// const a2 = [1 , ...a1 , 26 , "males"];

// document.write(a1);
// document.write(a2);



import React from 'react';
import ReactDOM from 'react-dom';
import Aapp from './Aapp';
import "./index.css";


ReactDOM.render(
    <>

<Aapp/>

    </>
,document.getElementById("root")
);
