import PostH from '../post/PostH';
import './posts.css';


export default function Post({posts}) {
    return (
        <div className="posts"> 
        {
            posts.map(p=>(
                <PostH post={p}/>
            ))
        }

        
{/*  
   <PostH/>
   <PostH/>
   <PostH/>
   <PostH/>
   <PostH/> */}
            
        </div>
    )
}
