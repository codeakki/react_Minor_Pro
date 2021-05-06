import React from 'react';  //To Import React and ReAct Dom
import ReactDOM from 'react-dom';
import './index.css' //To enable CSS
import Heading from './Heading';
import yt, { fav } from './App';


const flname="Akshay Sharma";
const curdate=new Date().toLocaleDateString(); //To get current Date of system
const curtime = new Date().toLocaleTimeString();

let curDate=new Date(2020,5,5,14);
curDate =curDate.getHours();
let greeting="";

const cssStyle={
   
};
if(curDate>=1 && curDate<12)
{
    greeting="Good Morning";
    cssStyle.color="green";
}
else if(curDate>=12 && curDate<19)
{
    greeting="Good Afternoon";
    cssStyle.color="orange";
}
else{
    greeting="Good Night"
    cssStyle.color="blue";
}

ReactDOM.render( /* kya display krvana h , aur kha krvana h */
    <React.Fragment> {/* //To get react Fragment or avoid creating of another div also used as <></> */}
    
       <h1 className="heading">{fav} Netflix pick</h1> {/* Instead of class in React it was ClassName */}
        <div className="Random"> <p><b><h2>List of 5 best seires </h2></b></p>
       <ol type="A" className="OL">
           <li>Avengers End Game</li>
           <Heading/> {/* calling of componet  */}
           <li>King Kong</li>
           <li>Last game</li>
           <li>{yt}</li> {/* importing of component */}
           <a href="https://www.google.com/" target="_blank">{/*  target _blank for new google page in new tab */}
           <li>Mirjapur</li>
           </a> 
       </ol>
       </div>
       
       <br></br>
      {/*  inline Css in React be like style={{key:'value'}} */}
       <h1 contentEditable="true" style={{color:'royalblue',textAlign:'justify',margin:'15px',marginLeft:'15px',marginInline:'15px'}}>Hello !...My Name is {flname}</h1>
      {/*  contentEditable meaning we can edit content in website */}
       <p><h2 style={{color: 'gray',testTransform: 'capitalize',textAlign:'center',margin:'15px',
        }}>Today Current Date is:  {curdate}</h2></p>
       <p><h2 style={{color: 'gray',testTransform: 'capitalize',textAlign:'center',}}>Today Current Time is:  {curtime}</h2></p> 
         <br></br>
         <br></br>
        <br></br>
       <div class="greet">

       <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>{/* Inline Css and javaScript
        */}
       </div>




    </React.Fragment>,
    
    document.getElementById("root")); 