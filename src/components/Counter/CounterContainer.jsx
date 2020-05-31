import React from 'react';
import {connect} from 'react-redux';


class CounterContainer extends React.Component {


    render() {

        return <>


        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

    }
}

export default connect(mapStateToProps, )(CounterContainer);

















