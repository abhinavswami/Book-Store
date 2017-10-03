import React from 'react';
import {connect} from 'react-redux';

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(
            <div>
                <h1>Book Details Page</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // state mapping here
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // action mapping here
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
