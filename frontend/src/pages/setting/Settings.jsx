import "./settings.css";

import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
    // const {user}=useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/";

  

  const handleSubmit = async (e) => {
  
    dispatch({ type: "UPDATE_START" });
    
    const updatedUser = {
      
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      //const res = await axios.put("users/" + user._id, updatedUser);
      
    } catch (err) {
     
    }
  };


  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) :user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
         
        </form>
      </div>
     
    </div>
  );
}




//     return (
//         <div className="setting">
//             <div className="settingWrapper">
//                 <div className="settingsTitle">
//                     <span className="settingsUpdateTitle">Update Your Account</span>
//                    <span className="settingsDeleteTitle">Delete Account</span>
                
//                 </div>

//                 <form className="settingsForm">
//                       <label htmlFor="">Profile Picture </label>

//          <div className="settingsProPic">
//              <img src={user.profilePic} alt="" />
//              <label htmlFor="fileInput">
//              <i className="settingsPPIcon far fa-user-circle"></i>
//              </label>
//              <input type="file" id="fileInput" style={{display:"none"}}/>
//              </div>
//        <label> Username</label>
//        <input type="text"  placeholder="Gemechu"/>
//        <label> Email</label>
//        <input type="text"  placeholder="gemechubulti11@gmail.com"/>
//        <label> Password</label>
//        <input type="password" />
//        <button className="settingsSubmit">Update</button>


       

//                 </form>

//             </div>
      

            
//         </div>
//     )
// }

