
import React from 'react';
import PostRemark from './PostRemark';

const updStatus = () =>{
    console.log('fake for content satus')
}


const Post =  React.memo((props) =>{

  
return (
    
    <div>
        
    <h1>{props.title}</h1>
        <PostRemark updStatus = {updStatus}/>
       <p>{props.text}</p>
        <img alt ='img' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/GettyImages-566448559.jpeg?nbzkEwZ0ik6DIwB5c.pPFMHS9aaMaSsC"></img>
    </div>

)

})
export default Post;