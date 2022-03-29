
import NavBar from "./NavigationBar/NavBar";
 import Register from "./pages/register/Register";
 import Settings from "./pages/setting/Settings"
 import Login from "./pages/login/Login";
 import Write from "./pages/write/Write";
 import SinglePage from "./pages/singlePage/SinglePage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import { Context } from "./context/Context";
import {useContext} from 'react';






function App() {
  const {user} = useContext(Context);
  return (
<Router>

   <NavBar/>
<Switch>
  <Route exact path="/">{user?<Home/>:<Register/>}</Route>

  <Route path="/login" >{user?<Home/>:<Login/>}</Route>
  <Route path="/register" >{user?<Login/>:<Register/>}</Route>
  <Route path="/settings">{user?<Settings/>:<Register/>}</Route>
    <Route path="/write" >{user?<Write/>:<Register/>}</Route>
    <Route path="/registor">{<Register/>}</Route>
    <Route path="/post/:postid" >
      <SinglePage/>
      
    </Route>
    <Route path="/singlePage" ><SinglePage/></Route>
</Switch>
  


   
  </Router> 
  );
}

export default App;
