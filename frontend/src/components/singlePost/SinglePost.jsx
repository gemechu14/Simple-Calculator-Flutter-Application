import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
























// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './singlePost.css';
// import {useEffect,useState,useContext } from 'react';
// import axios from "axios";
// import { Context } from '../../context/Context';


// export default function SinglePost() {
//     const location=useLocation();

//     const path=location.pathname.split("/")[2];
//     const [post ,setPosts] =useState({});
//     const {user }= useContext(Context);
//     const PF = "http://localhost:5000/images/";

//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const [updateMode, setUpdateMode] = useState(false);

//     useEffect(() => {
//         const getPost=async ()=>{
//         const res= await  axios.get("/post/"+path);  
    
//         console.log(res);
//         setPosts(res.data);
//         setDesc(res.data.desc)
//         setTitle(res.data.title)

//    }
//        getPost()
//     }, [path])


//     const handleDelete = async () => {
//         try {
//             await axios.delete(`/post/${post._id}`, {
//                 data: { username: user.username },
//               });
//         //   await axios.delete(`/post/${post._id}`+ path, {data:{ username: user.username }},);
//           window.location.replace("/");
//         } catch (err) {}
//       };
//       console.log(post.username===user.username)
//     return (
//         <div className="singlePost">

//         <div className="siglePageWrapper">

//                 {post.photo &&(
//                 <img className="singlepostImage" src={ PF + post.photo} alt="" />

//                 )}

//                     {updateMode ? (
//           <input
//             type="text"
//             value={title}
//             className="singlePostTitle"
//             autoFocus
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         ) : (
//           <h1 className="singlePostTitle">
//             {post.title}
//             {post.username === user?.username && (
//               <div className="singlePostEdit">
//                 <i
//                   className="singlePostIcon far fa-edit"
//                   onClick={() => setUpdateMode(true)}
//                 ></i>
//                     <i className="fas fa-trash-alt"  onClick={handleDelete}></i>
//                     </div>
//                     )}
//                     </h1>
//                     )
//                 }
                   
//                  <div className="singlePostDesc">
                     

//                      {updateMode ? (
//           <textarea
//             className="singlePostDescInput"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         ) : (
//           <p className="singlePostDesc">{post.desc}</p>
//         )}

//                        {/* <p className="postDescription">{post.desc}
//                            </p> */}


// <span className="price">
//                         {new Date(post.createdAt).toDateString()}
//                      </span>
//                      <span className="quantity">5</span>
//                      </div>     
               
//             </div>
    
     
//         </div>
//     )
// }
