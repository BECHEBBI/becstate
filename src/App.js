import "./App.css";
 import React, { Component } from 'react';
import myImg from "./image/myimage.jpg";
import MountedTime from "./component/MountedTime";
const styleImg ={
  width:250 ,
  borderRadius:150 , 
  marginTop:10,
  border: '1px solid blue', 
};

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default class App extends Component {

state = {
    fullName : "Baha Eddine CHEBBI" ,
    bio : "Hello that's me",
    imgScr : (<img src={myImg} alt="myrpofile" style={styleImg} />),
    profession :"Front End developper",
    shows :false ,
  };



    handleShow = () => {
      this.setState({shows:!this.state.shows})
    }

  render (){
    
    return (

      <div className='App'>
        <br />
        <button className="button" onClick={this.handleShow} >   {this.state.shows ? "Hide" : "Show"}  </button>
            {this.state.shows ? ( 
              <div className="profile">
                <div className="proimg">
               {this.state.imgScr}
               </div>
            <h1 style={{color :'blue'}}> {this.state.fullName}</h1>
            <h3 style={{color :'#02138C'}}> {this.state.bio}</h3>
            <h3 style={{color :'#2B3AA5'}}> {this.state.profession}</h3>
            <MountedTime />
            </div>
            ):null}

        </div>
      
      );


  }


}


