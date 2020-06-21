const TXT_UPD = 'TXT_UPD';
const TXT_ADD = 'TXT_ADD';

let initReducer = {
   
        text: [
           {key: 1,title: 'Title 1',text:'Lorem'} ,
           {key: 2,title: 'Title 2',text:'Ipsum'} ,
           {key: 3,title: 'Title 3',text:'dolor'} ,
           {key: 4,title: 'Title 4',text:''} ,
           {key: 5,title: 'Title 5',text:''} ,
           {key: 6,title: 'Title 6',text:''} 
        ],

         UpdateContentText:'Content'
    
}
const ContentReducer = (state = initReducer,action) =>{
    

    switch(action.type){

        case TXT_ADD: {
    

        let newState = {

            title: 'New Title',
            key: state.text.length + 1,
            text: action.msg
        }
        return {
            ...state,
            text: [...state.text,newState]
        }
    }
        default: return state;
    }
}
export const heppandTextActionCreator = (msg) =>( {type: TXT_ADD, msg} );


export default ContentReducer;