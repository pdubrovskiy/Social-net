import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? <Component {...this.props} /> : <Navigate to={'/login'} />
        };
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}