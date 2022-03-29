import './navBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';


export default function NavBar() {
    const {user,dispatch}=useContext(Context);

   const handleLogout=()=>{
       dispatch({  type: "LOGOUT"});

   }

    return (
        
        <div className="navBar">
         <div className="t_left"> <i className="fas fa-caravan"> Ethio-Tour</i></div>
         <div className="t_center">
<ul className="navList">
<ol className="navListItem">  <Link to="/" className="link">Home</Link></ol>  
<ol className="navListItem">  <Link to="/write" className="link">Post</Link></ol> 
<ol className="navListItem">  <Link to="/contact" className="link">Contact</Link></ol> 
<ol className="navListItem">  <Link to="/feedback" className="link">FeedBack</Link></ol> 
<ol className="navListItem">  <Link to="/about" className="link">About</Link></ol>
<ol className="navListItem"> 
 <Link className="link" to="/login" onClick={handleLogout}>
 {user &&"Logout"}
 </Link>
 </ol>

 </ul> </div>
         
         <div className="t_right">
            {
                user?<Link to="/settings"><img className="topImage" src={user.profilePic} alt="" />
                </Link>

              :(
              <ul className="navList">

     <ol className="navListItem">
    
    <Link to="/login" className="link">Login</Link>
    </ol>  

    <ol className="navListItem">
    
    <Link to="/register" className="link">Register</Link>
    </ol> 
              </ul>

              )
            }


             <i className=" searchImage fas fa-search"></i>
         </div>
        </div>
    )
}
