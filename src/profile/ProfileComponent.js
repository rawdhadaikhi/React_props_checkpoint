import React from 'react';
import PropTypes from 'prop-types';



const GetProfil = (props) =>{
         
    // const styleDiv ={borderRadius :5, borderStyle:'outset', color:'#ffb3d1',width:700}
      const styleH ={fontSize:'large', color:'#686868', textAlign:'center'}
      const styleProf = {textAlign:'center', color:'black'}
      const styleLien ={backgroundColor:' #ff6699',color:'white', textDecoration:'none', fontSize:20}

        const handleName = e => {
          e.preventDefault();
          alert(`my name is ${props.name}`) ;
        };

    return (
        <div>
            {props.children}
         <h1 style ={styleH}>{props.name}</h1>
         <h3 style ={styleH}>{props.bio}</h3>
         <p style ={styleProf}>{props.profession}</p>
         <a  href="/" onClick={handleName} style ={styleLien}>
            Click me
          </a>
        </div>
    );
}
export default GetProfil;

GetProfil.propTypes={
    name:PropTypes.string,
    bio :PropTypes.string,
    profession:PropTypes.string,
};



