import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    sumitBook(input){
        alert(input + 'submitted');
    }
    
    render() {
        let titleInput;
        return (
            <div>
                <h3>
                    Books</h3>
                <ul>
                    {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={e => {
                    // Prevent request
                    e.preventDefault();
                    // Assemble inputs
                    var input = {title: titleInput.value};
                    // Call handler
                    this.submitBook(input);
                    e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node=> titleInput = node}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>

        );
    }
}
export default Book;