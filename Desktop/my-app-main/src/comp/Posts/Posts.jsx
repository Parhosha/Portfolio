
     import React from 'react';
     import Post from './Post/Post';    
     import s from './Post/Post.module.css'; 
     import Footer from '../Footer';
      import { Redirect } from 'react-router-dom';

      
     const Posts = (props) =>{
       
      console.log('Post')
    
        let PostString = props.ContentPage.text.map( 
         
         p => <Post title = {p.title} text = {p.text}/>
         
          );

         return (

            <div className = {s.content } >
            {PostString}
            <Footer  hpd = { props.heppandTextActionCreator}/>
            </div>
           
         )
     }
     

      export default Posts;