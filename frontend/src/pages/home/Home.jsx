import "./home.css";
import Headers from "../../components/header/Header";
import Post from "../../posts/Post";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import { useEffect,useState } from "react";




export default function Home() {

   

   const [posts,setPosts]=useState([]);
   
    useEffect(() => {
        const fetchPost=async ()=>{
        const res= await  axios.get("/post");  
       setPosts(res.data);
        }
       fetchPost()
    }, [])

    return (
        <>
            <Headers/>
            <div className="home" >
            <Post posts={posts}/>
                 <Sidebar/>
                
               
            </div>
          
            
        </>
    )
}
