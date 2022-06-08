import React ,{children} from 'react';
import PropTypes from 'prop-types';



const Profile = (props) => {


  const proof={color:"aqua" , fontSize:"15px",margin:"7px"};
 
  // const bayo={padding:"20px"};
  const name={ color:"cornflowerblue",textAlign:"center"};
  const bio={fontFamily: 'Roboto Condensed'}


  return (
    <div >
      <span> <button  className='bott'  onClick={()=>props.alertMe()}> Click with name</button>
      
      <h3 style={name}>My name is {props.fullName}    </h3> 
      </span>
      
   
   {/* <div onLoad={()=>props.handleName()}>{props.fullName}</div> */}
  
  <div className="container">
    <div className='prooff'>
<span style={proof}>Gender   :  </span>{props.Gender} <br/>
<span style={proof}>Adress    :  </span> {props.adress}<br/>
<span style={proof}>Mobile    :  </span>{props.Mobile} <br/>
<span style={proof}>Email     :  </span>{props.Email} <br/>
<span style={proof}>Interests :  </span> {props.Interests} <br/>

</div>
<div>{props.children}</div>
  </div>





<div> 
  <span style={bio}>{props.profession}</span>
  </div>
  

    </div>
  )
}


Profile.propTypes={

  fullName:PropTypes.string,
  Gender:PropTypes.string,
  adress:PropTypes.string,
  Mobile:PropTypes.number,
  Email:PropTypes.string,
  Interests :PropTypes.string,
  profession:PropTypes.string,
  alertMe:PropTypes.func

};

Profile.defaultProps ={
  fullName:"Foulen",
  Email:true
};


export default Profile
