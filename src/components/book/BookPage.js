import React from 'react';
import {connect} from 'react-redux';
import BookForm from './BookForm';
import {Link} from 'react-router-dom';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.submitBook = this.submitBook.bind(this);
    }

    submitBook (input) {
        console.log('Inside submitBook, '+input);
        this.props.createBook(input);
    }

    render() {
        return (
           <div className="row">
               <div className="col-md-6">
                   <h3>Books</h3>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Title</th>
                               <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.books.map((b, i) => {
                                return(
                                <tr key={i}>
                                    <td>{b.title}</td>
                                    <td><Link to={`/books/${b.id}`}>View</Link></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>New Book</h3>
                    <BookForm submitBook = {this.submitBook} />
                </div>
            </div>
        );
    }
}
// Map state from store to props
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // You can now say this.props.books
        books: state.books
    }
};

// Map actions to props
const mapDispatchToProps = (dispatch) => {
    console.log('Inside mapDispatchToProps');
    return {
        
        // You can now say this.props.createBook
        createBook: book => dispatch(bookActions.createBook(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
