import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return({
        dialogs: state.messagesPage.dialogs
    });
}

compose(connect(mapStateToProps),
        withAuthRedirect)(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default DialogsContainer;