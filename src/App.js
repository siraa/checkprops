import logo from './logo.svg';
import Profile from './profile/Profile';
import img     from  './photo.jpg' ;
import './App.css';


// grid template area
// margin-top -50
// margin
// title title bloc
// display bloc
// display flex/ justifycentent spacebetween/align item:center
function App() {
  
  let msg = "Hi !  "
  const alertMe = () => {
    alert("hello Taysirrrrr")
  }


  return (
    <div  className='project'>
  <Profile alertMe={alertMe}    adress="Rue Habib Bourgiba ,Kalaa Sghira 4021 Sousse" Mobile ="+21623785890"  Email ="thessalyse@hotmail.fr" bio=" "   Gender="Female" Interests="E-commerce,équitation,Music,Travel"   profession='Holder of a national diploma of engineer ,
   i kept following this cercus of good bases. In this context, 
   the opportunity has been given to me during the internships to discover a true link between theory and practice quoted database and system.'>
        <img  src={img} alt="img" style={{padding: "40px 15px",width:"300px",borderRadius:"50px"}}/>
      </Profile>
    </div>
  );
}

export default App;
 {/* <button onClick={()=> props.handleName}>{props.fullName}</button> */}
//  <button onClick={props.alertMe}> Click me plzzzzzz</button>
// style={{display:"flex",justifyContent:"flexEnd",borderRadius:"12px",width:"30px"}}