import React from 'react';
import {connect} from 'react-redux';
import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.fetchBookById(this.props.match.params.id);
    }
    render() {
        return(
            <div>
                <h1>Book Details Page</h1>
                <BookDetails book ={this.props.book}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // state mapping here
        book: state.book
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        // action mapping here
        // This dispatch will trigger the ajax request we setup in our actions
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
