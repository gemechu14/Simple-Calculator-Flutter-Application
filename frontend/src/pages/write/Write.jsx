import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  }

    return (
        <div className="write">
          <div className="headerTitle">Post interesting areas</div>

{file && (
        <img className="imageFile" src={URL.createObjectURL(file)} alt="" />
      )}
            {/* <img className="imageFile" src="./images/g.jpg" alt="" /> */}
        
           
            <form className="writeForm" onSubmit={handleSubmit}>
            
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus-square"></i>
                    </label>
                    <input type="file"
                      id="fileInput" 
                      style={{display:"none"}}
                      onChange={(e) => setFile(e.target.files[0])}
                      
                      />
                    <input type="text"
                     placeholder="Name" 
                     className="writeInput" 
                     autoFocus={true} 
                     onChange={e=>setTitle(e.target.value)}
                     
                     />
                              
                </div>
                <div className="writeFormGroup">
                <input type="file"  id="fileInput" style={{display:"none"}}/>

                {/* <input type="text" placeholder="Price" className="writeInput" autoFocus={true}/>
                <input type="file"  id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Quantity" className="writeInput" autoFocus={true}/>
                 */}
                
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Description....." 
                    id=""
                     className="writeInput writeText"
                     onChange={e=>setDesc(e.target.value)}
                     ></textarea>
                </div>
                <button className="writeSubmit" type="submit" >Post</button>

            </form>

            
        </div>
    )
}
