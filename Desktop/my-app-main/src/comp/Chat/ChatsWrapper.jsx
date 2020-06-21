import React, { Component } from "react";
import { connect } from 'react-redux';
import {getStatus,setUser,heppandActionCreator,setUserProfileAC,updStatus} from '../redux/Chat-reducer';
import Chat from './Chat';
import {withRouter} from 'react-router-dom';
import AuthHoc from '../HOC/AuthHoc';

class ChatsContainer extends React.Component {

    componentDidMount(props){

        this.props.setUser(this.props.match.params.user);
        this.props.getStatus(this.props.match.params.user)
        }

        render(){

            return  <div>
                         <Chat  ChatPage = {this.props.ChatPage}
                                heppandActionCreator = {this.props.heppandActionCreator}
                                updateMsgActionCreator = {this.props.updateMsgActionCreator}
                                updStatus = {this.props.updStatus}
                                status = {this.props.status}
                            />
            </div>
        }
}


let mapStateToProps =  (state) => {

    return { 
        ChatPage: state.ChatPage,
        }
 }
        


 let urlData = withRouter(ChatsContainer);
 
 const ChatsWrapper = AuthHoc(connect(mapStateToProps,{getStatus,setUser,updStatus,heppandActionCreator,setUserProfileAC} )(urlData));
 


export default ChatsWrapper;