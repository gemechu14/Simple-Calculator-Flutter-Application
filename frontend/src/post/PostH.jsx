import './postH.css';
import { Link } from 'react-router-dom';
export default function PostH({post}) {

   const PF = "http://localhost:5000/images/";
    //const pt= "http://localhost:5000/images/1630066685345photo_2021-08-25_16-10-44.jpg";
    return (
      //  {post.photo && <img className="postImg" src={PF + post.photo} alt="" />
        
        <div className="post">

            {post.photo && (
            <img className="postImage" src={PF + post.photo} alt="" />
            )
            }
           
        <div className="postInfo">

            <div className="postCats">
                {
                    post.catagories.map((c)=>(
                        <span className="postCats"> {c.name}</span>
                    ))
                
                    }
               
            </div>
            <Link className="link" to={`/post/${post._id}`}>
            <span className="postTitle">             
            {post.title}
            </span>
            </Link>

            {/* <span className="postTitle"> 
            <Link className="link" to="/singlePage">
            {post.title}</Link>
            </span> */}
          
            <span className="postPrice">{new Date(post.createdAt).toDateString()} </span>
            <hr />
        </div>
            <span className="postDesc">
              {post.desc}
               
            </span>
        </div>
    )

}


