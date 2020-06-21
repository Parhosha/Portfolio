
import {getUsers} from './../redux/Users-reducer'

const COMPLITEAPP = 'COMPLITEAPP';

let app = {

   autoRith: false

}

const AppReducer = (state = app, action) => {
    

    switch (action.type){

        case COMPLITEAPP: {

            return {

                ...state,
                autoRith: true

            }
    }
        default:
             return state;
    }
    
}

export default AppReducer;

export const autComplite = () => ({ type: COMPLITEAPP });


export const turnProcess = () =>  (dispatch) => {

    let promise = dispatch(getUsers())

    Promise.all([promise])
        .then( () => 
         dispatch(autComplite()))
   

}
