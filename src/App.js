
import './App.css';

import  GetProfil from './profile/ProfileComponent';
import myimg from './profile/profile.png';


function App() {
  return (
    <div className="App">

    <div style={{borderRadius :5,backgroundColor:'white', borderStyle:'outset', color:'#ffb3d1',height:450,width:350,padding:30,margin:'auto'}}>

    <img src ={myimg} alt ="log" style={{width:200,height:200}} />

    <GetProfil name ="Rawdha daikhi"
     bio="soft skills : react js,node js ,javascript" 
     profession="web developper" >
   </GetProfil>
   </div>
    </div>
  );
}

export default App;



