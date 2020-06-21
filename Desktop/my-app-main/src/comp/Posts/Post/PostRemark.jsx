
import React, {useState,useEffect} from 'react';

const PostRemark = (props) =>{
  
  
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect( ( ) => {
        setStatus(props.status);
    },[props.status])

 /*componentDidUpdate(prevProps,prevState){

      console.log(prevProps.status + ' / ' + this.props.status + ' / ' + this.state.status)

    if(prevProps.status !== this.props.status ){
         this.setState({
             status: this.props.status  
            })
     }
}
*/
const changeStatusLocal = (e) =>{
    setStatus(e.currentTarget.value)
}

const changeModeOffSwitch = ( ) =>{
    setEditMode(false)
    props.updStatus(status)
}

const changeModeOnSwitch = ( ) =>{
    setEditMode(true)
}
    
        return (
    <div className="status">
        
        { !editMode &&
        <div> Status:
        <div onClick = {changeModeOnSwitch}>{  status || '-empty-'}</div>
        </div>
        }

        { editMode &&
        <div>
        <input type="text" onBlur = {changeModeOffSwitch} autoFocus={true} onChange={changeStatusLocal}/>
        </div>
        }
    </div>

        )
}

export default PostRemark;