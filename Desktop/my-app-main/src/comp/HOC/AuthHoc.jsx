    import { connect } from 'react-redux';
    import React from 'react';
    import { Redirect } from 'react-router-dom';;
    
    let mapStateToProps = (state) =>({
        Auth: state.Login.auth
    })

     const WithAuth = (Component) => {
    
        class RedirectComponent extends React.Component{
         render (){
            if(!this.props.Auth) return <Redirect to='/Login' />   
            return <Component {...this.props} />
         }

        }

        let AuthRedirectHoc = connect(mapStateToProps)(RedirectComponent);

        return  AuthRedirectHoc;
}
export default WithAuth;
     
     

      