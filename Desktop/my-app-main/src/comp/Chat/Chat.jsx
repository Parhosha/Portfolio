
     import React from 'react';
     import s from './Chat.module.css';
     import Footer from '../Footer';
     import srcImg from '../img/package.png';
     import Preloader from '../Preloader/Preloader';
      import PostRemark from '../Posts/Post/PostRemark';
    

     const Message = (props) => {

            return (
              <div >
                   <p>{props.send}</p>  
              </div>
     )
}
     

     const Chat = (props) =>{
      
             

            if(!props.ChatPage.user){
                  return <Preloader/>
            }
            
            
            let Messages = props.ChatPage.messages.map( 
            p => <Message send = {p.msg} /> );
      
            
       

         return  <div>
                  <div className={s.Chat}>
                 
          
  
            <div className={s.Contacts}>
            {
          
                  props.ChatPage.user.map( p => <div>

                        <div>
                          <img  alt = '#' src = { 
                        p.photos.small ? p.photos.small : srcImg
                        }></img>
                        </div>

                        <div>{p.fullName}</div>
                        <div>{p.userId}</div>
                        <div>{'Loking for a job: ' + p.lookingForAJob + ' '}</div>
                        <div>{p.contacts.twitter + ' '}</div>
                        <div>{p.contacts.followed + ' '}</div>
                      <PostRemark updStatus = {props.updStatus}  status = {props.ChatPage.status}></PostRemark>
                        

                        </div>)
            }
            </div>


                  <div className={s.Massages}>
                        {Messages}
                  </div>

                 

            </div>
            <Footer 
             updateMsgActionCreator = { props.updateMsgActionCreator }
             heppandActionCreator = { props.heppandActionCreator } />
             </div>
         
     }
     

      export default Chat;
      